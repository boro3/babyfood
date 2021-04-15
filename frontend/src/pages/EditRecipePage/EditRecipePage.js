import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams , useHistory } from "react-router-dom";

import { uploadRecipePictureReq, fetchSingleReciple, updateRecipeReq } from '../../resources/apiReq/ApiReq';
import { GET_RECIPE_IMG } from './../../resources/constants/endpoins';
import { compareRecipeStateUpdate } from './../../services/functions/functions'

import TitleSeparator from '../../components/TitleSeparator/TitleSeparator';
import RecipeForm from '../../components/widgets/RecipeForm/RecipeForm';
import backLogo from './../../assets/icons/icon_back_white.svg';

import "./styles.css";

const EditRecipePage = () => {
    let { id } = useParams();
    let history = useHistory();
    const user = useSelector(state => state.authReducer.user);

    const handleBtnBackClick=(e)=>{
        history.goBack();
    };

    useEffect(() => {
        if (user) {
            try {
                fetchSingleReciple(user.jwt, id)
                    .then(data => {
                        setRecipe(data);
                    });
            } catch (error) {
                setError({
                    showError: true,
                    message: error.message,
                })
            }
        }
    }, [user]);

    const [error, setError] = useState({
        showError: "",
        error: false
    });


    const [recipeData, setRecipe] = useState({
        title: '',
        category: '',
        prep_time: '',
        num_person: '',
        description: '',
        recipe: '',
        _id: '',
    });

    const [uploadImage, setUpload] = useState(false);
    const [imageFile, setFile] = useState();
    const [image, setImage] = useState();

    const handleSubmit = async (values) => {
        let newRecipeData = compareRecipeStateUpdate(values, recipeData);
        if (uploadImage) {
            newRecipeData.image = image;
        }
        try {
            let data = await updateRecipeReq(recipeData._id, user.jwt, newRecipeData);
            if (data) {
                alert("Saved");
            }
        } catch (error) {
            setError({
                showError: true,
                message: error.message,
            })
        }
    };

    const handleChange = async (event) => {
        const files = event.target.files
        const formData = new FormData()
        formData.append('document', files[0])
        try {
            let data = await uploadRecipePictureReq(formData, user.jwt);
            if (data) {
                setFile({
                    file: URL.createObjectURL(files[0])
                });
                setUpload(true);
                setImage(data);
            }
        } catch (error) {
            setError({
                showError: true,
                message: error.message,
            })
        }
    };

    return (
        <div className="new-recipe-page container main-container">
            <div className="title-separator-container">
                <TitleSeparator headTitle={'my recipes'} />
                <span className="head-btn-back" onClick={handleBtnBackClick}>
                    <img src={backLogo} alt="Unavaliable" />
                </span>
            </div>


            <div className='new-recipe-page-content'>
                <div className="recipe-left-column">
                    <span className='input-group-label'>Recipe Image</span>
                    <div className='recipe-picture'>
                        {
                            uploadImage ?
                                <img src={imageFile.file} alt="Unavaliable" />
                                :
                                recipeData.image ?
                                    <img src={`${GET_RECIPE_IMG}${recipeData.image}`} alt="Unavaliable" />
                                    :
                                    <img src="https://i.pinimg.com/originals/85/bc/7e/85bc7e9fa20c080a508aa10d16092a06.png" alt="Unavaliable" />
                        }
                    </div>
                    <div className="recipe-upload">
                        <input type="file" id="file" name='file' className="file-upload" onChange={handleChange} />
                        <label htmlFor="file">upload image</label>
                    </div>
                </div>
                <RecipeForm handleSubmit={handleSubmit} setError={setError} error={error} recipeData={recipeData} />
            </div>
        </div>
    );
};

export default EditRecipePage;