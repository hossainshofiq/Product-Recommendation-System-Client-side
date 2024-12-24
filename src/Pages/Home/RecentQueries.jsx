import React, { useEffect, useState } from 'react';
import RecentQueryCard from './RecentQueryCard';
import axios from 'axios';

const RecentQueries = () => {

    const [queries, setQueries] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5000/queries')
            // fetch('https://product-recommendation-s-d6b6d.web.app/queries')
            axios('http://localhost:5000/queries')
            // .then(res => res.json())
            .then(data => {
                setQueries(data.data);
            })
    }, [])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-5xl'>Recent Queries</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5'>
                {
                    queries.map(query => <RecentQueryCard key={query._id} query={query}></RecentQueryCard>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;