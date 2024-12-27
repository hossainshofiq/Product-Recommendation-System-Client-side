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
import RecommendationForm from '../Pages/RecommendationForm';

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
                element: <Queries></Queries>,
                loader: () => fetch('http://localhost:5000/queries'),
            },
            {
                path: '/recommendationsForMe',
                element: <PrivateRoute>
                    <RecommendationsForMe></RecommendationsForMe>
                </PrivateRoute>
            },
            {
                path: '/myQueries',
                element: <PrivateRoute>
                    <MyQueries></MyQueries>,
                </PrivateRoute>,
            },
            {
                path: '/addQuery',
                element: <PrivateRoute>
                    <AddQueryForm></AddQueryForm>
                </PrivateRoute>
            },
            {
                path: '/recommendationForm/:id',
                element: <PrivateRoute>
                    <RecommendationForm></RecommendationForm>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`),
            },
            {
                path: '/myQueries/queryDetails/:id',
                element: <PrivateRoute>
                    <MyQueryDetails></MyQueryDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`)
            },
            {
                path: 'myQueries/queryUpdate/:id',
                element: <PrivateRoute>
                    <MyQueryUpdate></MyQueryUpdate>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`)
            },
            {
                path: '/myRecommendations',
                element: <PrivateRoute>
                    <MyRecommendations></MyRecommendations>
                </PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/recommendations/${params.id}`)
            },
        ]
    },
    // {
    //     path: '*',
    //     // element: <h1>Error Page</h1>
    //     element: <ErrorPage></ErrorPage>
    // }
])

export default router;