import React from 'react';

import NavLinks from './../../components/ui/NavLinks/NavLinks';
import babylogo from './../../assets/icons/logo_white.svg';

import "./styles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <img src={babylogo} alt="unavaliable"></img>
                </div>
                <div className="footer-nav-links">
                    <NavLinks label={'breakfast'} path={"/recipes/breakfast"} type="middle" active={"nav"} />
                    <span className="black-dot"></span>
                    <NavLinks label={'braunch'} path={"/recipes/braunch"} type="middle" active={"nav"} />
                    <span className="black-dot"></span>
                    <NavLinks label={'Lunch'} path={"/recipes/lunch"} type="middle" active={"nav"} />
                    <span className="black-dot"></span>
                    <NavLinks label={'dinner'} path={"/recipes/dinner"} type="middle" active={"nav"} />
                </div>
                <div className="footer-text">
                    Baby's Food place copyright 2021
                </div>
            </div>

        </div>
    );
};

export default Footer;