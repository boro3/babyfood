import React from 'react';

import './styles.css';

const Input = (props) => {
    return (
        <div className='input-group'>
            <span className='input-group-label'>{props.label}</span>
            <input
                autoComplete='off'
                className={`input-group-input ${props.small ? 'input-small' : null}`}
                placeholder={props.placeholder}
                onBlur={props.handleBlur}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Input;