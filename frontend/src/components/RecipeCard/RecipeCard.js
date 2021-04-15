import React from 'react';

import { GET_RECIPE_IMG } from './../../resources/constants/endpoins';

import RecipeCardFooter from './RecipeCardFooter/RecipeCardFooter';

import "./styles.css";

const RecipeCard = (props) => {

    return (
        <div className="recipe-card">
            <div className="card-img">
                {props.recipe.image ?
                    <img src={`${GET_RECIPE_IMG}${props.recipe.image}`} alt="Unavaliable" />
                    :
                    <img src="https://i.pinimg.com/originals/85/bc/7e/85bc7e9fa20c080a508aa10d16092a06.png" alt="Unavaliable" />}
                <span className="card-sticker">
                    {props.recipe.category}
                </span>
            </div>
            <div className="card-content">
                <h4>{props.recipe.title}</h4>
                <p>{props.recipe.description}</p>
            </div>
            <RecipeCardFooter recipe={props.recipe} />
        </div>
    );
};

export default RecipeCard;