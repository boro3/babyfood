const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipes',
    {
        title: String,
        category: String,
        prep_time: String,
        num_person: String,
        stars: Number,
        description: String,
        recipe: String,
        uid: String,
        image: String,
        _created: Date,
        _deleted: Boolean
    },
    'recipes'
);

const getAll = async () => {
    let data = await Recipe.find({ _deleted: false }).sort([['stars', 1]]);
    return data;
};

const getNew = async () => {
    let data = await Recipe.find({ _deleted: false }).limit(3).sort([['_created', 1]]);
    return data;
};

const getByUid = async (uid) => {
    let data = await Recipe.find({ uid: uid, _deleted: false });
    return data;
};
const getByCategory = async (category) => {
    let data = await Recipe.find({ category: category, _deleted: false });
    return data;
};


const getOne = async (id) => {
    let data = await Recipe.findOne({ _id: id, _deleted: false });
    return data;
};
const getOneByTitle = async (title) => {
    let data = await Recipe.findOne({ title: title, _deleted: false });
    return data;
};

const save = async (userData) => {
    let r = new Recipe(userData);
    let data = await r.save();
    return data;
};

const remove = async (id) => {
    let data = await Recipe.updateOne({ _id: id }, { _deleted: true });
    return data.nModified !== 0;
};

const update = async (id, userData) => {
    let data = await Recipe.updateOne({ _id: id }, userData);
    return data.nModified !== 0;
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    remove,
    getOneByTitle,
    getByUid,
    getByCategory,
    getNew
};