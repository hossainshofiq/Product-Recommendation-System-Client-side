import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/SharedComponents/ErrorPage';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Queries from '../Pages/Queries';
import RecommendationsForMe from '../Pages/RecommendationsForMe';
import MyRecommendations from '../Pages/MyRecommendations';
import PrivateRoute from './PrivateRoute';
import MyQueries from '../Pages/MyQueries/MyQueries';
import AddQueryForm from '../Pages/MyQueries/AddQueryForm';
import MyQueryDetails from '../Pages/MyQueryDetails';
import MyQueryUpdate from './../Pages/MyQueries/MyQueryUpdate';

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
            },
            {
                path: '/addQuery',
                element: <PrivateRoute>
                    <AddQueryForm></AddQueryForm>
                </PrivateRoute>
            },
            {
                path: '/myQueries/queryDetails/:id',
                element: <MyQueryDetails></MyQueryDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/queries/${params.id}`)
            },
            {
                path: '/queryUpdate/:id',
                element: <MyQueryUpdate></MyQueryUpdate>,
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