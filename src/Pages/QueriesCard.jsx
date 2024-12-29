import React from 'react';
import { Link } from 'react-router-dom';

const QueriesCard = ({ query }) => {
    return (
        <div key={query._id} className="card bg-base-100 shadow-xl border p-4 md:p-6 rounded-lg">
            <figure className="flex justify-center items-center bg-gray-100 rounded-lg p-4">
                <img
                    className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-lg"
                    src={query?.productImageUrl}
                    alt={query?.productName}
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-lg md:text-xl font-bold">{query?.productName}</h2>
                <p className="text-sm md:text-base text-gray-500">Brand: {query?.productBrand}</p>
                <p className="mt-2 text-sm md:text-base text-gray-700">
                    <span className="font-semibold">Query:</span> {query?.queryTitle}
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-700">
                    <span className="font-semibold">Reason for Boycott:</span>{' '}
                    {query?.boycottingReasonDetails}
                </p>
            </div>

            <div className="flex flex-col items-center justify-center border-t pt-4 space-y-4">
                <img
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-lg"
                    src={query?.userProfileImage}
                    alt={query?.userName}
                />
                <div className="text-center">
                    <p className="font-semibold">{query?.userName}</p>
                    <p className="text-sm text-gray-500">{query?.userEmail}</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <h4 className='font-medium text-sm md:text-base text-gray-500'>
                        Recommendation Count: {query?.recommendationCount}
                    </h4>
                    <Link to={`/recommendationForm/${query._id}`}>
                        <button className='btn bg-blue-600 hover:bg-blue-700 text-white'>
                            Recommend
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QueriesCard;