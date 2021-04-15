import React from 'react';
import NavLinks from './../../ui/NavLinks/NavLinks';
import LogoutLink from './../../ui/LogoutLink/LogoutLink';
import "./styles.css"

const HeaderUserLinks = () => {
    return (
        <div className="header-nav-links">            
            <NavLinks label={'my recipe'} path={"/myrecipes"} type="user" active={"user"}/>
            <span className="black-dot"></span>    
            <NavLinks label={'my profile'} path={"/myprofile"} type="user" active={"user"}/>                 
            <span className="black-dot"></span>
            <LogoutLink/>
        </div>
    );
};

export default HeaderUserLinks;