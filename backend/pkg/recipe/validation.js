const { Validator } = require('node-input-validator');

const recipeSchema = {
    title: 'required|minLength:3',
    category: 'required',
    prep_time: 'required',
    description: 'required|minLength:5',
    num_person: 'required'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    recipeSchema,
    validate
};