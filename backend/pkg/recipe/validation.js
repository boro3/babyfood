const { Validator } = require('node-input-validator');

const recipeSchema = {
    title: 'required|minLength:3',
    category: 'required|minLength:4',
    prepTime: 'required|minLength:1',
    description: 'required|minLength:5',
    recipe: 'required|minLength:10',
    numPeople: 'required',
    image:'required'
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