import React, { useState, useEffect } from 'react';

import RecipeCardView from './../../components/RecipeCardView/RecipeCardView';


const HomePage = () => {
    const [recipes, setRecipes] = useState(null);
    const [newRecipes, setNewRecipes] = useState(null);

    useEffect(() => {

        fetch('http://localhost:8082/api/v1/recipe/all',
            {
                METHOD: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    useEffect(() => {

        fetch('http://localhost:8082/api/v1/recipe/new',
            {
                METHOD: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => setNewRecipes(data))
            .catch(error => {
                console.log(error.message);
            })
    }, []);
    
    return (
        <div className="home-page container main-container">
            {recipes ? <RecipeCardView recipes={newRecipes} headTitle={"fresh & new"} /> : null}
            {recipes ? <RecipeCardView recipes={recipes} headTitle={"Most popular recipes"} /> : null}
        </div>
    );
};

export default HomePage;