import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <Spinner animation="grow" variant="dark" />
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;