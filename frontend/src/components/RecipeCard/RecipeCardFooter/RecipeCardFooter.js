import React, { useState } from 'react';

import ModalWindow from './../../ModalWindow/ModalWindow';

import plateIcon from './../../../assets/icons/icon_plate.svg';
import timeIcon from './../../../assets/icons/icon_time.svg';
import starIcon from './../../../assets/icons/icon_star.svg';
import arrowsIcon from './../../../assets/icons/icon_arrows_white.svg';

import "./styles.css";

const RecipeCardFooter = (props) => {
    const {stars} = props.recipe;
    const [starRating, setStars] = useState(stars);
    const [showModdal, setModal] = useState(false);

    const handleClickStar = (event) => {
        fetch(`http://localhost:8082/api/v1/recipe/add/${props.recipe._id}`,
        {
            METHOD: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }
    )
        .then(response => response.json())
        .then(data => setStars(data.stars))
        .catch(error => {
            console.log(error.message);
        })
    };

    const handleModal = (e) =>{
        if(showModdal){
            setModal(false);
        } else {
            setModal(true);
        }
    }
    return (
        <>
        <div className="recipe-card-footer">
            <div className="prep-time">
                <span className="time-icon">
                    <img src={timeIcon} alt="unavaliable"></img>
                </span>
                <span>
                    {props.recipe.prep_time} min
                </span>
            </div>
            <div className="num-person">
                <span className="plate-icon">
                    <img src={plateIcon} alt="unavaliable"></img>
                </span>
                <span>
                    {props.recipe.num_person} persons
                </span>
            </div>
            <div className="star-rating" onClick={handleClickStar}>
                <span className="star-icon">
                    <img src={starIcon} alt="unavaliable"></img>
                </span>
                <span>
                    {starRating}
                </span>
            </div>
            <div className="arrow-button" onClick={handleModal}>
                <span className="arrow-icon" >
                    <img src={arrowsIcon} alt="unavaliable"></img>
                </span>
            </div>
        </div>
        {showModdal ?  <ModalWindow recipe = {props.recipe} handleModal={handleModal}/> : null}
        </>
    );
};

export default RecipeCardFooter;