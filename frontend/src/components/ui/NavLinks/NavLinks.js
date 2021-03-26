import React from 'react';
import {NavLink} from 'react-router-dom';

import "./styles.css"

const NavLinks = (props)=>{
    return (
        <NavLink activeClassName={props.active} className={`header-link ${props.type}-links`} to={props.path}>
            {props.label}
        </NavLink>
    );
};

export default NavLinks;