import React from 'react';
import "./styles.css";

import RecipeCard from './../RecipeCard/RecipeCard'
import TitleSeparator from './../TitleSeparator/TitleSeparator';

const RecipeCardView = (props) => {
    return (
        <div className="recipe-view">
            <TitleSeparator headTitle = {props.headTitle}/>
            <div className="recipe-card-collection">
                {props.recipes.map((recipe , i) => {
                  return(<RecipeCard recipe={recipe} key = {i} />);
                })}
            </div>
        </div>
    );
};

export default RecipeCardView;