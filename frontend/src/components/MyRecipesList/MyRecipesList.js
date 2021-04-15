import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { deleteRecipeReq } from './../../resources/apiReq/ApiReq';
import { formatDate } from './../../services/functions/functions';
import trashCan from './../../assets/icons/icon_trashcan.svg';

import './styles.css';

const MyRecipesList = (props) => {
    const user = useSelector(state => state.authReducer.user);
    let history = useHistory();
    const { jwt } = user;

    function handleClickLink(id) {
        history.push(`/myrecipes/${id}`);
    };

    const handleClick = (e) => {
        handleClickLink(e.target.id);
    };
    const handleBtnDeleteClick = async (event, a) => {
        event.stopPropagation();
        try {
            let data = await deleteRecipeReq(a, jwt);
            if (data) {
                alert("Deleted");
                props.handleDelete(a);
            }
        } catch (error) {
            alert(error.message)
        }
    };

    return (
        <>
            <div className="my-recipes-list">
                {props.recipes.map((recipe, i) => {
                    return (
                        <div className="recipe-strip" key={i} onClick={handleClick} id={recipe._id}>
                            <span className="recipe-strip-title">{recipe.title}</span>
                            <span className="recipe-strip-category">{recipe.category}</span>
                            <span className="recipe-strip-created">{formatDate(recipe._created)}</span>
                            <div className="recipe-strip-btn" onClick={(e) => { handleBtnDeleteClick(e, recipe._id) }} >
                                <img src={trashCan} alt="unavaliable"></img>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    );
};

export default MyRecipesList;