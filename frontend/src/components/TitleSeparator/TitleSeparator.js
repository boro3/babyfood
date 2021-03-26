import React from 'react';
import "./styles.css";


const TitleSeparator = (props) => {
    return (
        <div className="recipe-view-separator">
            <span className='separator-title'>
                {props.headTitle}
            </span>
            <div className='separator-line'></div>
        </div>
    );
};

export default TitleSeparator;