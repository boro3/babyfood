const usersModel = require('../../../pkg/user');
const bcrypt = require('bcryptjs');
const usersValidator = require('../../../pkg/user/validation');
const jwt = require('jsonwebtoken');
const cfg = require('../../../pkg/config');

const create = async (req, res) => {
    // validate user data
    try {
        await usersValidator.validate(req.body, usersValidator.registrationSchema);
    } catch (err) {
        console.log(err);
        return res.status(401).send('Wrong Email or password');
    }
    // check if user already exists in db
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (ru) {
            return res.status(409).send('Email already exist');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    req.body.repeat_password = bcrypt.hashSync(req.body.repeat_password);
    // set defaults
    req.body._created = new Date();
    req.body._deleted = false;
    // save user
    try {
        let u = await usersModel.save(req.body);
        res.status(201).send(u);
    } catch (err) {
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
        return res.status(401).send('Wrong Email or password');
    }
    // get user
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (!ru) {
            return res.status(401).send('Email does not exist');
        }
        if (bcrypt.compareSync(req.body.password, ru.password)) {
            let payload = {
                uid: ru._id,
                first_name: ru.first_name,
                last_name: ru.last_name,
                exp: (new Date().getTime() + (360 * 24 * 60 * 60 * 1000)) / 1000
            };
            let key = cfg.get('server').jwt_key;
            let token = jwt.sign(payload, key);
            return res.status(200).send({ jwt: token, uid: ru._id })
        }
        return res.status(401).send('Wrong password');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const userProfile = async (req, res) => {
    // get user
    try {
        let ru = await usersModel.getOne(req.params.id);
        if (!ru) {
            return res.status(401).send('User does not exist');
        }
        return res.status(200).send(ru);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const patch = async (req, res) => {
    // get user
    try {
        let ru = await usersModel.getOne(req.params.id);
        if (!ru) {
            return res.status(401).send('User does not exist');
        }
        if (req.body.email) {
            let ru2 = await usersModel.getOneByEmail(req.params.id);
            if (!ru2) {
                return res.status(401).send('Email Already Taken');
            }
        }       
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password);
            req.body.repeat_password = bcrypt.hashSync(req.body.repeat_password);
        }
        await usersModel.update(req.params.id, req.body);
        return res.status(200).send('ok');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    create,
    login,
    userProfile,
    patch
};