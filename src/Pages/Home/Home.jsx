import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;