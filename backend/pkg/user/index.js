const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        repeat_password: String,
        dob: Date,
        image: String,
        _created: Date,
        _deleted: Boolean
    },
    'users'
);

const getAll = async () => {
    let data = await User.find({});
    return data;
};

const getOne = async (id) => {
    let data = await User.findOne(
        { _id: id, _deleted: false },
        { _id: 0, password: 0, repeat_password: 0, _created: 0, _deleted: 0 }
    );
    return data;
};

const getOneByEmail = async (email) => {
    let data = await User.findOne({ email:email, _deleted:false });
    return data;
};

const save = async (userData) => {
    let u = new User(userData);
    let data = await u.save();
    return data;
};

const update = async (id, userData) => {
    let data = await User.updateOne({ _id: id }, userData);
    return data.nModified !== 0;
};

const updatePartial = async (id, userData) => {
    let data = await User.updateOne({ _id: id }, userData);
    return data.nModified !== 0;
};

const remove = async (id) => {
    let data = await User.updateOne({ _id: id }, { _deleted: true });
    return data.nModified !== 0;
};

module.exports = {
    getAll,
    getOne,
    getOneByEmail,
    save,
    update,
    updatePartial,
    remove
};