import React from 'react';

import TitleSeparator from '../../components/TitleSeparator/TitleSeparator';
import LoginForm from './../../components/widgets/LoginForm/LoginForm';

import './styles.css';

const LoginPage = () => {
    return (
        <div className="login-page container">
            <TitleSeparator headTitle='log in' />
            <div className="login-components-container">
                <div className="login-text-container">
                    <h2 className = "login-text-title">Welcome to <span>Baby’s</span></h2>
                    <p className="login-text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;