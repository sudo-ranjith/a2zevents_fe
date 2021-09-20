import React from 'react';
import { Route, useHistory,Redirect } from 'react-router-dom';
import { isLogin } from '../utils/Auth';
import Login from '../views/Login';



const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login"/>
        )} />
    );
};

export default PrivateRoute;