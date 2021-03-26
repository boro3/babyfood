import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from './../../../redux/ducks/auth';


const LogoutLink = (props) => {
    const router = useHistory();

    const handleClick = () => {
        props.logoutUser();
        localStorage.clear();
        router.push('/');
    }
    return (
        <span className="logot-link header-link" onClick={handleClick}>
            logout
        </span>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => { dispatch(logoutUser()) }
    }
};

export default connect(0,mapDispatchToProps)(LogoutLink);