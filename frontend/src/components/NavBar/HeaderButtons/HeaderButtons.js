import React from 'react';
import "./styles.css";
import LinkButton from '../../ui/LinkButton/LinkButton'

const HeaderButtons = () => {
    return(
        <div className="header-buttons-group">
            <LinkButton path={'/login'} label={"log in"} type = "transparent"/>
            <span className="header-buttons-group-span">or</span>
            <LinkButton path={'/singup'} label={"create account"} type = "primary"/>
        </div>
    );
};

export default HeaderButtons;