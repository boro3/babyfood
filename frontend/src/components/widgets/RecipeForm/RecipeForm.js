import React from 'react';
import { useFormik } from 'formik';

import { recipeSchema } from '../../../resources/constants/formValidationSchemas';

import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

import './styles.css'

const validationSchema = recipeSchema;

const RecipeForm = (props) => {
    const formik = useFormik({
        initialValues: {
            title: props.recipeData.title,
            category:props.recipeData.category,
            num_person: props.recipeData.num_person,
            prep_time: props.recipeData.prep_time,
            description: props.recipeData.description,
            recipe: props.recipeData.recipe,          
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: values => {
           props.handleSubmit(values);
        },
    });

    return (
        <>
            <form className="recipe-form" onSubmit={formik.handleSubmit}>
                <div className="inputs-container">
                    <div className="recipe-form-left-column">
                        <div className="recipe-form-first-row">
                            <Input
                                label='Recipe Title'
                                placeholder='Recipe Tite'
                                type='text'
                                name='title'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                            />
                            <span className="error-message">
                                {formik.touched.title && formik.errors.title ?
                                    formik.errors.title : null}
                            </span>
                        </div>

                        <div className="recipe-form-second-row">
                            <div className="small-group">
                                <div className="input-group">
                                    <span className='input-group-label'>Category</span>
                                    <select name="category"
                                        id="category-select"
                                        className="input-group-input input-small"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.category}
                                    >
                                        <option value="">Category</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="braunch">Braunch</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                    </select>
                                    <span className="error-message">
                                        {formik.touched.category && formik.errors.category ?
                                            formik.errors.category : null}
                                    </span>
                                </div>
                            </div>
                            <div className="small-group">
                                <Input
                                    small={true}
                                    label='Preparation Time'
                                    placeholder='Preparation Time'
                                    type='text'
                                    name='prep_time'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.prep_time}
                                />
                                <span className="error-message">
                                    {formik.touched.prep_time && formik.errors.prep_time ?
                                        formik.errors.prep_time : null}
                                </span>
                            </div>
                            <div className="small-group">
                                <Input
                                    small={true}
                                    label='No. People'
                                    placeholder='No. People'
                                    type='text'
                                    name='num_person'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.num_person}
                                />
                                <span className="error-message">
                                    {formik.touched.num_person && formik.errors.num_person ?
                                        formik.errors.num_person : null}
                                </span>
                            </div>
                        </div>
                        <div className="recipe-form-third-row">
                            <span className='input-group-label'>Description</span>
                            <textarea id="w3review" name="description"
                                placeholder='Short description of the recipe here'
                                className="description-txt"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </textarea>
                            <span className="error-message">
                                {formik.touched.description && formik.errors.description ?
                                    formik.errors.description : null}
                            </span>
                        </div>
                    </div>

                    <div className="recipe-form-right-column">
                        <span className='input-group-label'>Recipe</span>
                        <textarea id="w3review" name="recipe"
                            placeholder='Write the recipe here'
                            className="recipe-txt"
                            value={formik.values.recipe}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </textarea>
                        <span className="error-message">
                            {formik.touched.recipe && formik.errors.recipe ?
                                formik.errors.recipe : null}
                        </span>
                    </div>
                </div>
                <div className="create-recipe-last-row">
                    <div className="create-user-form-input-row-element submit-form-btn">
                        <Button
                            label='save'
                            type='submit'
                        />
                    </div>
                    <div className="create-user-form-input-row-element">
                        {props.error.showError ? <span className="error-message">{props.error.message}</span> : null}
                    </div>
                </div>
            </form>
        </>
    );
};

export default RecipeForm;