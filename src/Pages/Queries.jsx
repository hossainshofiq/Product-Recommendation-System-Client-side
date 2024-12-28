import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Queries = () => {
    const queries = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [filteredQueries, setFilteredQueries] = useState(queries);
    const [gridColumns, setGridColumns] = useState(1);

    const handleSearch = (event) => {
        const text = event.target.value.toLowerCase();
        setSearchText(text);

        const filtered = queries.filter(query =>
            query.productName.toLowerCase().includes(text)
        );
        setFilteredQueries(filtered);
    };

    const handleGridChange = (columns) => {
        setGridColumns(columns);
    };

    return (
        <div className='max-w-7xl mx-auto my-10 px-4'>
            <div className='flex flex-wrap justify-between items-center gap-4'>
                <h1 className='font-bold text-center text-3xl md:text-5xl'>All Queries: {queries?.length}</h1>
                <div className="flex flex-wrap gap-4 items-center">
                    <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
                        <FaSearch />
                        <input type="text" className="grow" placeholder="Search" value={searchText} onChange={handleSearch} />
                    </label>
                    {/* Layout Toggle Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleGridChange(1)}
                            className={`btn ${gridColumns === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                        >1 Column</button>
                        <button
                            onClick={() => handleGridChange(2)}
                            className={`btn ${gridColumns === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                        >2 Columns</button>
                        <button
                            onClick={() => handleGridChange(3)}
                            className={`btn ${gridColumns === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                        >3 Columns</button>
                    </div>
                </div>
            </div>

            <div
                className={`grid gap-6 mt-10`}
                style={{ gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))` }}
            >
                {filteredQueries.length > 0 ? (
                    filteredQueries.map(query => (
                        // Query details Card
                        <div
                            key={query._id}
                            className="card bg-base-100 shadow-xl border p-4 md:p-6 rounded-lg"
                        >
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
                    ))
                ) : (
                    <div className="text-center col-span-full">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            No queries found for "{searchText}"
                        </h2>
                        <p className="text-gray-500">Try searching with a different product name.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Queries;