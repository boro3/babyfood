import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loginUser } from './../../redux/ducks/auth';
import { getLocalStorageUser } from './../../services/localStorage/localStorage';

import NavBar from './../NavBar/NavBar'

import "./styles.css"

const Header = (props) => {
    const { loginUser } = props;
    const userData = getLocalStorageUser();

    useEffect(() => {
        if (userData !== "") {
            loginUser(JSON.parse(userData));
        }
    });

    return (
        <div className="header">
            <NavBar />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (data) => { dispatch(loginUser(data)) },
    }
};


export default connect(0, mapDispatchToProps)(Header);