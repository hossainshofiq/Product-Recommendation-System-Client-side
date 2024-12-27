import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import axios from 'axios';

const RecommendationsForMe = () => {
    const { user } = useAuthHook();

    const [recommendationsForMe, setRecommendationsForMe] = useState ([])
    useEffect(() => {
        axios.get(`http://localhost:5000/recommendationsForMe?email=${user?.email}`)
        .then (res=> {
            setRecommendationsForMe(res.data);
        })
    }, [user])
    return (
        <div>
            <h1>Recommendations For Me: {recommendationsForMe.length}</h1>
        </div>
    );
};

export default RecommendationsForMe;