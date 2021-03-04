const usersModel = require('../../../pkg/user');
const bcrypt = require('bcryptjs');
const usersValidator = require('../../../pkg/user/validation');
const jwt = require('jsonwebtoken');
const cfg = require('../../../pkg/config');

const create = async (req, res) => {
    console.log("cteate user")
     // validate user data
     try {
        await usersValidator.validate(req.body, usersValidator.registrationSchema);
    } catch(err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // check if user already exists in db
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if(ru) {
            return res.status(409).send('Conflict');
        }
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    // set defaults
    req.body._created = new Date();
    req.body._deleted = false;
    // save user
    try {
        let u = await usersModel.save(req.body);
        res.status(201).send(u);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
     // validate user data
     try {
        await usersValidator.validate(req.body, usersValidator.loginSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // get user
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (!ru) {
            return res.status(403).send('Forbidden');
        }
        if (bcrypt.compareSync(req.body.password, ru.password)) {
            let payload = {
                uid: ru._id,
                first_name: ru.first_name,
                last_name: ru.last_name,
                exp: (new Date().getTime() + (60 * 60 * 1000)) / 1000
            };
            let key = cfg.get('server').jwt_key;
            let token = jwt.sign(payload, key);
            return res.status(200).send({ jwt: token })
        }
        return res.status(401).send('Unauthorized!');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    create,
    login
};