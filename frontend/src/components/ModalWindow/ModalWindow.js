import React from 'react';

import closeIcon from './../../assets/icons/icon_close.svg';
import timeIcon from './../../assets/icons/icon_time.svg';
import palteIcon from './../../assets/icons/icon_plate.svg';
import starIcon from './../../assets/icons/icon_star.svg';

import { GET_RECIPE_IMG } from './../../resources/constants/endpoins';

import './styles.css';

const ModalWindow = (props) => {
    return (
        <div className="modal-window">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-title">
                        {props.recipe.title}
                    </span>
                    <span className="modal-close-btn" onClick={props.handleModal}>
                        <img src={closeIcon} alt="unavaliable"></img>
                    </span>
                </div>
                <div className='modal-content-container'>
                    <div className='modal-left-columnt'>
                        <div className="modal-image">
                            {props.recipe.image ?
                                <img src={`${GET_RECIPE_IMG}${props.recipe.image}`} alt="Unavaliable" />
                                :
                                <img src="https://i.pinimg.com/originals/85/bc/7e/85bc7e9fa20c080a508aa10d16092a06.png" alt="Unavaliable" />}
                        </div>
                        <div className='modal-description-header'>
                            Best Served For
                            <div className="modal-sticker">
                                {props.recipe.category}
                            </div>
                            <div className="modal-decription">
                                {props.recipe.description}
                            </div>
                        </div>
                        <div className='modal-icons'>
                            <span className="single-icon">
                                <img src={timeIcon} alt="unavaliable"></img>
                                {props.recipe.prep_time}
                            </span>
                            <span className="single-icon">
                                <img src={palteIcon} alt="unavaliable"></img>
                                {props.recipe.num_person}
                            </span>
                            <span className="single-icon">
                                <img src={starIcon} alt="unavaliable"></img>
                                {props.recipe.stars}
                            </span>
                        </div>
                    </div>
                    <div className='modal-right-columnt'>
                        <h4>Recipe Details</h4>
                            <div className="modal-recipe"  >
                                {props.recipe.recipe}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;