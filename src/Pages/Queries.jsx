import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import QueriesCard from './QueriesCard';

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
            <div className='flex flex-wrap justify-between gap-4'>
                <h1 className='font-bold text-center text-3xl md:text-5xl'>All Queries</h1>
                <div className="flex flex-col flex-wrap gap-4">
                    <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
                        <FaSearch></FaSearch>
                        <input type="text" className="grow" placeholder="Search" value={searchText} onChange={handleSearch} />
                    </label>

                    {/* Layout Toggle Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleGridChange(1)}
                            className={`btn ${gridColumns === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'} hidden md:block`}
                        >1 Column</button>
                        <button
                            onClick={() => handleGridChange(2)}
                            className={`btn ${gridColumns === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'} hidden sm:block `}
                        >2 Columns</button>
                        <button
                            onClick={() => handleGridChange(3)}
                            className={`btn ${gridColumns === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'} hidden lg:block`}
                        >3 Columns</button>
                    </div>
                </div>
            </div>

            <div className={`grid gap-6 mt-10`}
                style={{ gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))` }}
            >
                {filteredQueries?.length > 0 ?
                    (
                        filteredQueries.map(query => <QueriesCard key={query._id} query={query}></QueriesCard>)
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