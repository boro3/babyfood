const recipeModel = require('../../../pkg/recipe');
const recipeValidator = require('../../../pkg/recipe/validation');

const create = async (req, res) => {
    try {
        await recipeValidator.validate(req.body, recipeValidator.recipeSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Invalid data');
    }
    try {
        let r = await recipeModel.getOneByTitle(req.body.title);
        if (r) {
            return res.status(409).send('Already exist');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
    req.body.uid = req.user.uid;
    req.body._created = new Date();
    req.body._deleted = false;
    req.body.stars = 0;
    // save user
    try {
        let recipe = await recipeModel.save(req.body);
        res.status(201).send(recipe);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let data = await recipeModel.getOne(req.params.id);
        if (data) {
            return res.status(201).send(data);
        } else {
            return res.status(404).send('No such record.');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error.');
    }
};

const getByUid = async (req, res) => {
    try {
        let data = await recipeModel.getByUid(req.user.uid);
        if (data) {
            return res.status(201).send(data);
        } else {
            return res.status(404).send('No such record.');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error.');
    }
};
const getAll = async (req, res) => {
    try {
        let data = await recipeModel.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error.');
    }
};

module.exports = {
    create,
    getOne,
    getByUid,
    getAll
};