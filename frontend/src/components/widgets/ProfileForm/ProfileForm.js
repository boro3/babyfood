import React from 'react';
import { useFormik } from 'formik';
import { useSelector } from "react-redux";

import { updateUserSchema } from '../../../resources/constants/formValidationSchemas';
import { updateUserReq } from './../../../resources/apiReq/ApiReq';
import { formatDate, compareStateUpdate } from './../../../services/functions/functions'

import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

import './styles.css';

const validationSchema = updateUserSchema;

const CreateUserForm = (props) => {
    const user = useSelector(state => state.authReducer.user);

    const handleSubmit = async (values) => {
        let a = compareStateUpdate(values, props.userData);
        if (props.image.uploadImage) {
            a.image = props.image.image;
        }
        try {
            let data = await updateUserReq(user.uid, user.jwt, a);
            if (data) {
                alert("Saved");
            }
        } catch (error) {
            props.setError({
                showError: true,
                message: error.message,
            })
        }
    };

    const formik = useFormik({
        initialValues: {
            first_name: props.userData.first_name,
            last_name: props.userData.last_name,
            email: props.userData.email,
            dob: formatDate(props.userData.dob),
            password: '',
            repeat_password: ''
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
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
                            placeholder='********'
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
                            placeholder='********'
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
                            label='Save'
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

export default CreateUserForm;