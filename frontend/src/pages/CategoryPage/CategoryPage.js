import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import RecipeCardView from './../../components/RecipeCardView/RecipeCardView'

const CategoryPage = () => {
    const [recipes, setRecipes] = useState(null);
    let { category } = useParams();

    useEffect(() => {

        fetch(`http://localhost:8082/api/v1/recipe?category=${category}`,
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
    }, [category]);


    return (
        <div className="home-page main-container container">
            {recipes ? <RecipeCardView recipes={recipes} headTitle={category} /> : null}
        </div>
    );
};

export default CategoryPage;