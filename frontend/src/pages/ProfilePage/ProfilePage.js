import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchUserReq, uploadUserPictureReq } from '../../resources/apiReq/ApiReq';
import { GET_PROFILE_IMG } from './../../resources/constants/endpoins'

import TitleSeparator from '../../components/TitleSeparator/TitleSeparator';
import ProfileForm from '../../components/widgets/ProfileForm/ProfileForm';

import './styles.css'

const ProfilePage = () => {
    const user = useSelector(state => state.authReducer.user);

    useEffect(() => {
        if (user) {
            try {
                fetchUserReq(user.uid, user.jwt)
                    .then(data => {
                        setUser(data);
                    });
            } catch (error) {
                setError({
                    showError: true,
                    message: error.message,
                })
            }
        }
    }, [user]);

    const [userData, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        dob: '',
        image: ''
    });

    const [error, setError] = useState({
        showError: "",
        error: false
    });

    const [uploadImage, setUpload] = useState(false);
    const [imageFile, setFile] = useState();
    const [image, setImage] = useState();

    const handleChange = async (event) => {
        const files = event.target.files
        const formData = new FormData()
        formData.append('document', files[0])
        try {
            let data = await uploadUserPictureReq(formData, user.jwt);
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
        <div className="profile-page container">
            <TitleSeparator headTitle='My profile' />

            <div className="profile-page-content">

                <div className="profile-left-column">
                    <div className='profile-picture'>
                        {uploadImage ?
                            <img src={imageFile.file} alt="Unavaliable" />
                            :
                            userData.image ?
                                <img src={`${GET_PROFILE_IMG}${userData.image}`} alt="Unavaliable" />
                                :
                                <img src="https://i.pinimg.com/originals/85/bc/7e/85bc7e9fa20c080a508aa10d16092a06.png" alt="Unavaliable" />}
                    </div>

                    <div className="profile-upload">
                        <input type="file" id="file" name='file' className="file-upload" onChange={handleChange} />
                        <label htmlFor="file">change avatar</label>
                    </div>
                </div>

                <div className="profile-right-column">
                    <div className="profile-form">
                        <ProfileForm image={{ image, uploadImage }} userData={userData} setError={setError} error={error} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;