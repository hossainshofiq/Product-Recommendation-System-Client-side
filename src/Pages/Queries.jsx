import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Queries = () => {

    const loadedQueries = useLoaderData();
    const [queries, setQueries] = useState(loadedQueries);
    // console.log(queries);

    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='font-bold text-center text-5xl'>All Queries: {queries?.length} </h1>
            <div>
                {
                    queries.map(query =>
                        <div key={query._id} className="card card-side border p-5 my-10 items-center">
                            <figure>
                                <img
                                    className='w-52'
                                    src={query?.productImageUrl}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{query?.productName}</h2>
                                <p>{query?.productBrand}</p>
                                <p>{query?.queryTitle}</p>
                                <p>{query?.boycottingReasonDetails}</p>

                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <h4>recommendationCount: </h4>
                                <Link><button className='btn btn-success'>Recommend</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Queries;