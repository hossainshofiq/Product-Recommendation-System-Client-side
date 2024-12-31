import React, { useEffect, useState } from 'react';
import AddQueryBanner from './AddQueryBanner';
import useAuthHook from '../../Hooks/useAuthHook';
import { Link } from 'react-router-dom';
import MyQueryCard from './MyQueryCard';
import axios from 'axios';

const MyQueries = () => {

    const { user } = useAuthHook();
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        // cookie send to server
        axios.get(`https://product-recommendation-system-server-zeta.vercel.app/myQueries?email=${user.email}`, {withCredentials: true})
            .then(res => {
                setQueries(res.data);
            })
    }, [user.email]);

    return (
        <div className="flex flex-col text-center">
            <AddQueryBanner></AddQueryBanner>
            <div className="flex-grow flex flex-col items-center mx-5">
                <h1 className="font-bold text-5xl my-10">My Queries</h1>
                {
                    queries.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-7xl mx-auto">
                            {queries.map(query => (
                                <MyQueryCard
                                    key={query._id}
                                    query={query}
                                    queries={queries}
                                    setQueries={setQueries}
                                ></MyQueryCard>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center flex-grow">
                            <p className="text-xl text-gray-500 my-5">
                                No queries found. Start by adding your first query!
                            </p>
                            <Link to="/addQuery">
                                <button className="btn btn-primary">
                                    Add Query
                                </button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyQueries;