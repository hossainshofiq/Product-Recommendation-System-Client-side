import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';

const MyRecommendations = () => {
    const [recommendation, setRecommendation] = useState([]);
    const {user} = useAuthHook();

    useEffect(() => {
        axios.get(`http://localhost:5000/recommendations?email=${user?.email}`)
            .then(res => setRecommendation(res.data))
    }, [user])

    console.log (recommendation);
    return (
        <div>
            <h1>My Recommendations: {recommendation.length}</h1>
        </div>
    );
};

export default MyRecommendations;