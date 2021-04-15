import React from 'react';
import { useSelector } from 'react-redux';
import { Route , Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.authReducer.isAuth);

    return (
        <Route {...rest} render={props => {
            if (user) {
                return <Component {...props} />
            } else {
                return <Redirect to={{pathname:'/login'}} />
            }
        }}
        />
    );
};

export default ProtectedRoute;