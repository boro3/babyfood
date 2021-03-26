import React from 'react';

import './styles.css';
const Button = (props) => {
    return (
        <button className={`button button-${props.type}`} onClick={props.onClick} type ={props.type} >
            {props.label}
        </button>
    );
};

export default Button;