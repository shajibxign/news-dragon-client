import React from 'react';
import { Navigate, createBrowserRouter, Route } from 'react-router-dom';
import Main from '../Layouts/Main';
import Category from '../Pages/Home/Category';
import NewsLayout from '../Layouts/NewsLayout/NewsLayout';
import News from '../Pages/News/News';
import LoginLayout from '../Layouts/LoginLayout/LoginLayout';
import Reg from '../Pages/LogReg/Reg';
import Login from '../Pages/LogReg/Login';
import PrivateRoutes from './PrivateRoutes';
import TOC from '../Pages/Shared/TOC';

const routes = [
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      { path: '/', element: <Navigate to="/category/0" /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Reg /> },
    ],
  },
  {
    path: 'category',
    element: <Main />,
    children: [
      {
        path: ':id',
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/categories/${params.id}`),
      },
    ],
  },
  {
    path: 'news',
    element: <NewsLayout />,
    children: [
      {
        path: ':id',
        element: <PrivateRoutes> <News /> </PrivateRoutes> ,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
  {
    path: 'terms',
    element: <TOC/>
  },
];

const Router = createBrowserRouter(routes);

export default Router;
