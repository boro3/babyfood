import React from 'react';
import { useHistory } from 'react-router-dom';
import "./styles.css";

const LinkButton = (props) => {
    const router = useHistory();
    return (
        <button onClick={(e) => router.push(props.path)} className={`link-button button-${props.type}`}>
            {props.label}
        </button>
    );
};

export default LinkButton;