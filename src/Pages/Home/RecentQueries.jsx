import React, { useEffect, useState } from 'react';
import RecentQueryCard from './RecentQueryCard';
import axios from 'axios';

const RecentQueries = () => {

    const [recentQueries, setRecentQueries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recentQueries')
            .then(res => {
                setRecentQueries(res.data);
            })
    }, [])

    return (
        <div className='max-w-7xl mx-auto text-center my-10'>
            <h1 className='font-bold text-5xl'>Recent Queries {recentQueries.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
                {
                    recentQueries.map(query => <RecentQueryCard key={query._id} query={query}></RecentQueryCard>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;