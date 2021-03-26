import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import { createUserSchema } from '../../../resources/constants/formValidationSchemas';
import { createUserReq } from './../../../resources/apiReq/ApiReq';

import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

import './styles.css';

const validationSchema = createUserSchema;

const CreateUserForm = () => {
    const router = useHistory();

    const [error, setError] = useState({
        showError: "",
        error: false
    });

    const handleSubmit = async (values) => {
        try {
            let data = await createUserReq(values);
            if (data) {
                alert("User Created Please Log in");
                router.push('/login');
            }
        } catch (error) {
            setError({
                showError: true,
                message: error.message,
            })
        }
    };

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            dob: '',
            password: '',
            repeat_password: '',
        },
        validationSchema,
        onSubmit: values => {
            handleSubmit(values);
        },
    });

    return (
        <>
            <form className="create-user-form" onSubmit={formik.handleSubmit}>
                <div className="create-user-form-input-row">
                    <div className="create-user-form-input-row-element">
                        <Input
                            label='First Name'
                            placeholder='First Name'
                            type='text'
                            name='first_name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.first_name}
                        />
                        <span className="error-message">
                            {formik.touched.first_name && formik.errors.first_name ?
                                formik.errors.first_name : null}
                        </span>
                    </div>
                    <div className="create-user-form-input-row-element">
                        <Input
                            label='Last Name'
                            placeholder='Last Name'
                            type='text'
                            name='last_name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.last_name}
                        />
                        <span className="error-message">
                            {formik.touched.last_name && formik.errors.last_name ?
                                formik.errors.last_name : null}
                        </span>
                    </div>
                </div>
                <div className="create-user-form-input-row">
                    <div className="create-user-form-input-row-element">
                        <Input
                            label='Email'
                            placeholder='Email'
                            type='email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <span className="error-message">
                            {formik.touched.email && formik.errors.email ?
                                formik.errors.email : null}
                        </span>
                    </div>
                    <div className="create-user-form-input-row-element">
                        <Input
                            label='Birthday'
                            placeholder='Birthday'
                            type='date'
                            name='dob'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                        />
                        <span className="error-message">
                            {formik.touched.dob && formik.errors.dob ?
                                formik.errors.dob : null}
                        </span>
                    </div>
                </div>
                <div className="create-user-form-input-row">
                    <div className="create-user-form-input-row-element">
                        <Input
                            label='Password'
                            placeholder='Password'
                            type='password'
                            name='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <span className="error-message">
                            {formik.touched.password && formik.errors.password ?
                                formik.errors.password : null}
                        </span>
                    </div>
                    <div className="create-user-form-input-row-element">
                        <Input
                            label='Repeat Password'
                            placeholder='Repeat Password'
                            type='password'
                            name='repeat_password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.repeat_password}
                        />
                        <span className="error-message">
                            {formik.touched.repeat_password && formik.errors.repeat_password ?
                                formik.errors.repeat_password : null}
                        </span>
                    </div>
                </div>
                <div className="create-user-form-input-row">
                    <div className="create-user-form-input-row-element submit-form-btn">
                        <Button
                            label='Create Account'
                            type='submit'
                        />
                    </div>
                    <div className="create-user-form-input-row-element">
                        {error.showError ? <span className="error-message">{error.message}</span> : null}
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateUserForm;