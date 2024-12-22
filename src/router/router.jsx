import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/SharedComponents/ErrorPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Queries from '../Pages/Queries';
import RecommendationsForMe from '../Pages/RecommendationsForMe';
import MyQueries from '../Pages/MyQueries';
import MyRecommendations from '../Pages/MyRecommendations';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/queries',
                element: <Queries></Queries>
            },
            {
                path: '/recommendationsForMe',
                element: <RecommendationsForMe></RecommendationsForMe>
            },
            {
                path: '/myQueries',
                element: <PrivateRoute>
                    <MyQueries></MyQueries>
                </PrivateRoute>
            },
            {
                path: '/myRecommendations',
                element: <MyRecommendations></MyRecommendations>
            }
        ]
    },
    // {
    //     path: '*',
    //     // element: <h1>Error Page</h1>
    //     element: <ErrorPage></ErrorPage>
    // }
])

export default router;