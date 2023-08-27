import React from 'react';
import CustomNavbar from '../../Pages/Shared/CustomNavbar/CustomNavbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;