import React from 'react';

import CreateUserForm from '../../components/widgets/CreateUserForm/CreateUserForm';
import TitleSeparator from '../../components/TitleSeparator/TitleSeparator';

import './styles.css';

const CreateUserPage = () => {
    return (
        <div className="create-user-page container">
            <TitleSeparator headTitle='Create account' />
            <div className="create-user-container">
                <div className='create-user-text'>
                    <p className="create-user-text-title"><span>Create your</span></p>
                    <p className="create-user-text-title">account</p>
                    <div className="create-user-page-text">
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    </div>
                </div>

                <div className="create-user-page-form">
                    <CreateUserForm/>
                </div>
            </div>
        </div>
    );
};

export default CreateUserPage;