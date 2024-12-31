import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyQueryCard = ({ query, queries, setQueries }) => {

    const { _id } = query;

    const handleQueryDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://product-recommendation-system-server-zeta.vercel.app/queries/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Query has been deleted.",
                                icon: "success"
                            });
                            const remainingQueries = queries.filter(qry => qry._id !== _id)
                            setQueries(remainingQueries)
                        }
                    })
            }
        })
    }
    return (
        <div className="card bg-white shadow-lg rounded-lg w-full border mx-auto transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <figure className="px-5 pt-5">
                <img
                    src={query.productImageUrl}
                    alt={query.productName}
                    className="rounded-xl w-52 h-40 object-contain"
                />
            </figure>
            <div className="card-body text-center p-5">
                <h2 className="text-2xl font-bold text-gray-800">{query.productName}</h2>
                <h3 className="text-lg font-semibold text-gray-900">Brand: <span className='text-lg font-semibold text-gray-500'>{query.productBrand}</span></h3>
                <p className="text-gray-900 font-semibold my-3">Query Title: <span className='text-gray-600 '>{query.queryTitle}</span></p>
                <p className="text-gray-900 font-semibold my-3">Boycott Reason: <span className='text-gray-600 '>{query.boycottingReasonDetails}</span></p>
                <div className="card-actions flex justify-center space-x-3 mt-4 font-semibold">
                    <Link to={`/myQueries/queryDetails/${_id}`}>
                        <button className="px-4 py-2  bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                            View Details
                        </button>
                    </Link>
                    <Link to={`/myQueries/queryUpdate/${_id}`}>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600">
                            Update
                        </button>
                    </Link>
                    <button
                        onClick={() => handleQueryDelete(_id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyQueryCard;