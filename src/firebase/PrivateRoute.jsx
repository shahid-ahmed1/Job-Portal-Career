import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation()
    if(user){
        return children
    }
    if(loading){
        <span className="loading loading-spinner loading-xl"></span>
    }

    return <Navigate to={'/login'} state={location?.pathname}></Navigate> 
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;