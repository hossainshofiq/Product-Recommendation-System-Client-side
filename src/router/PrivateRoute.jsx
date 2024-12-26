import React from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {

    const {user, loading} = useAuthHook();
    const location = useLocation();
    // console.log(location);
    
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;