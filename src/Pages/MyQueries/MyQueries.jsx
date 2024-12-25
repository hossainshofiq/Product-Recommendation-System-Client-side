import React, { useEffect, useState } from 'react';
import AddQueryBanner from './AddQueryBanner';
import useAuthHook from '../../Hooks/useAuthHook';
import { Link } from 'react-router-dom';
import MyQueryCard from './MyQueryCard';

const MyQueries = () => {
    const [queries, setQueries] = useState([]);
    const { user } = useAuthHook();

    useEffect(() => {
        fetch(`http://localhost:5000/queries?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setQueries(data))
            .catch((err) => console.error('Error fetching queries:', err));
    }, [user.email]);


    return (
        <div className="text-center my-10">
            <AddQueryBanner></AddQueryBanner>
            <h1 className="font-bold text-5xl my-10">My Queries: {queries.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    queries.length > 0 ?
                        (queries.map(query => <MyQueryCard key={query._id} query={query} queries={queries} setQueries={setQueries}></MyQueryCard>)
                        ) : (
                            <div className='text-center'>
                                <p className="text-xl text-gray-500 my-5">No queries found. Start by adding your first query!</p>
                                <Link to='/addQuery'>
                                    <button className="btn btn-primary">
                                        Add Query
                                    </button>
                                </Link>
                            </div>)
                }

                {/* {queries.length > 0 ? (
                    queries.map((query) => (
                        <div key={query._id} className="card bg-base-100 w-96 shadow-xl my-10 border mx-auto">
                            <figure className="px-10 pt-10">
                                <img
                                    src={query.productImageUrl}
                                    alt={query.productName}
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{query.productName}</h2>
                                <p>{query.queryTitle}</p>
                                <div className="card-actions">
                                    <Link to={`/queryDetails/`}>
                                        <button className="btn btn-primary">View Details</button>
                                    </Link>
                                    <button className="btn btn-primary">Update</button>
                                    <button className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-center'>
                        <p className="text-xl text-gray-500 my-5">No queries found. Start by adding your first query!</p>
                        <Link to='/addQuery'>
                            <button className="btn btn-primary">
                                Add Query
                            </button>
                        </Link>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default MyQueries;
