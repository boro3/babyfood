import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavLinks from './../ui/NavLinks/NavLinks'
import HeaderUserLinks from './HeaderUserLinks/HeaderUserLinks';
import HeaderButtons from './HeaderButtons/HeaderButtons';

import BabyLogoColor from './../../assets/icons/logo_color.svg';

import "./styles.css"

const NavBar = (props) => {
    return (
        <div className="nav-bar container">
            <Link to='/'>
                <span className="header-brand">
                    <img src={BabyLogoColor} alt="Unavaliable"></img>
                </span>
            </Link>
            <div className="header-nav-links">
                <NavLinks label={'breakfast'} path={"/recipes/breakfast"} type="middle" active={"nav"} />
                <span className="orange-dot"></span>
                <NavLinks label={'braunch'} path={"/recipes/braunch"} type="middle" active={"nav"} />
                <span className="orange-dot"></span>
                <NavLinks label={'Lunch'} path={"/recipes/lunch"} type="middle" active={"nav"} />
                <span className="orange-dot"></span>
                <NavLinks label={'dinner'} path={"/recipes/dinner"} type="middle" active={"nav"} />
            </div>
            {props.isAuth ? <HeaderUserLinks /> : <HeaderButtons />}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth
    };
};

export default connect(mapStateToProps, 0)(NavBar);