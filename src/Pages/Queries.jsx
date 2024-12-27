import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Queries = () => {

    const queries = useLoaderData();

    // const [queries, setQueries] = useState(loadedQueries);
    // console.log(queries);
    // const {count, setCount} = useState(0);

    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='font-bold text-center text-5xl'>All Queries: {queries?.length} </h1>
            <div>
                {
                    queries.map(query =>
                        //  query details card
                        <div key={query._id} className="card lg:card-side bg-base-100 shadow-xl border p-6 my-10 rounded-lg">
                            <figure className="flex justify-center items-center bg-gray-100 rounded-lg p-4">
                                <img
                                    className="w-52 h-52 object-cover rounded-lg"
                                    src={query?.productImageUrl}
                                    alt={query?.productName}
                                />
                            </figure>

                            <div className="card-body flex-1">
                                <h2 className="card-title text-2xl font-bold">{query?.productName}</h2>
                                <p className="text-gray-500">Brand: {query?.productBrand}</p>
                                <p className="mt-2 text-gray-700">
                                    <span className="font-semibold">Query:</span> {query?.queryTitle}
                                </p>
                                <p className="mt-2 text-gray-700">
                                    <span className="font-semibold">Reason for Boycott:</span>{' '}
                                    {query?.boycottingReasonDetails}
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center border-l pl-6 space-y-4">
                                <img
                                    className="w-16 h-16 object-cover rounded-full shadow-lg"
                                    src={query?.userProfileImage}
                                    alt={query?.userName}
                                />
                                <div className="text-center">
                                    <p className="font-semibold">{query?.userName}</p>
                                    <p className="text-sm text-gray-500">{query?.userEmail}</p>
                                </div>
                                <div className="flex flex-col items-center gap-5">
                                    <h4>recommendationCount: {query?.recommendationCount}</h4>
                                    <Link to={`/recommendationForm/${query._id}`}><button className='btn btn-success'>Recommend</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Queries;