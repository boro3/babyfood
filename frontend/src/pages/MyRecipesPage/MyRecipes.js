import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import MyRecipesList from './../../components/MyRecipesList/MyRecipesList';
import TitleSeparator from './../../components/TitleSeparator/TitleSeparator';
import addLogo from './../../assets/icons/icon_plus_white.svg'

import './styles.css'

const MyRecipes = () => {
    let history = useHistory();
    const [recipes, setRecipes] = useState(null);
    const user = useSelector(state => state.authReducer.user);

    const handleBtnAddClick = (e) => {
        history.push("/recipes/create");
    };

    useEffect(() => {
        if (user) {
            fetch('http://localhost:8082/api/v1/user/recipes',
                {
                    METHOD: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${user.jwt}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setRecipes(data))
                .catch(error => {
                    console.log(error.message);
                })
        }
    }, [user]);

    const handleDelete = (id) => {
        let newArr = recipes.filter(function (recipe) {
            return recipe._id !== id;
        })
        setRecipes(newArr);
    };
    return (
        <div className="my-recipes container main-container">
            <div className="title-separator-container">
                <TitleSeparator headTitle={'my recipes'} />
                <span className="head-btn-back" onClick={handleBtnAddClick}>
                    <img src={addLogo} alt="Unavaliable"></img>
                </span>
            </div>
            {recipes ? <MyRecipesList recipes={recipes} handleDelete={handleDelete} /> : null}
        </div>
    );
};

export default MyRecipes;