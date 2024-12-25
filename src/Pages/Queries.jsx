import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Queries = () => {

    const loadedQueries = useLoaderData();
    const [queries, setQueries] = useState(loadedQueries);
    console.log(queries);

    return (
        <div className='my-10'>
            <h1 className='font-bold text-center text-5xl'>All Queries: {queries?.length} </h1>
            <div>
                {
                    queries.map(query =>
                        <div key={query._id} className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={query?.productImageUrl}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{query?.queryTitle}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Queries;