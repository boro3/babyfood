import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from './../../../redux/ducks/auth';
import { loginSchema } from './../../../resources/constants/formValidationSchemas';
import { setLocalStorageUser } from './../../../services/localStorage/localStorage';
import { loginUserReq } from '../../../resources/apiReq/ApiReq';

import Input from './../../ui/Input/Input';
import Button from './../../ui/Button/Button'

import './styles.css';

const validationSchema = loginSchema;

const LoginForm = (props) => {
    const router = useHistory();

    const [error, setError] = useState({
        showError: "",
        error: false
    });

    const handleSubmit = async (values) => {
        try {
            let data = await loginUserReq(values);
            if (data) {
                setLocalStorageUser(data);
                props.loginUser(data);
                router.push('/');
            }
        } catch (error) {
            setError({
                showError: true,
                message: error.message,
            });
        }
    };

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema,
        onSubmit: values => {
            handleSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
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

            <Button
                label='log in'
                type='submit'
            />
            {error.showError ? <span className="error-message">{error.message}</span> : null}
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (data) => { dispatch(loginUser(data)) },
    }
};


export default connect(0, mapDispatchToProps)(LoginForm);