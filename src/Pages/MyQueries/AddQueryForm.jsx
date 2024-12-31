import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthHook from '../../Hooks/useAuthHook';
import { FaArrowLeft } from 'react-icons/fa';

const AddQueryForm = () => {

    const { user } = useAuthHook();
    // console.log(user.photoURL);
    const navigate = useNavigate();

    const handleAddQuery = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);

        const queryData = {
            ...initialData,
            userEmail: user.email,
            userName: user.displayName,
            userProfileImage: user.photoURL,
            currentDateTime: new Date().toISOString(),
            // currentDateTime: formatDate(new Date()),
            recommendationCount: 0,
        };

        axios.post('https://product-recommendation-system-server-zeta.vercel.app/queries', queryData)
            .then(data => {
                // console.log(data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your query added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myQueries')
                }
            })
    }

    return (

        <div className="hero bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-10">
            <div className="hero-content w-full max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-center mb-5 text-indigo-600">
                    Add Your Query
                </h1>
                <Link
                    to="/myQueries"
                    className="btn btn-outline flex items-center gap-2 mb-5 text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-black"
                >
                    <FaArrowLeft className="text-lg" />
                    Back to My Queries
                </Link>

                <div className="card bg-white w-full border rounded-lg shadow-lg p-6 sm:p-8">
                    <form onSubmit={handleAddQuery} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Product Name */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Product Name</span>
                            </label>
                            <input
                                name="productName"
                                type="text"
                                placeholder="Enter product name"
                                className="input input-bordered w-full rounded-md text-sm bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Product Brand */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Product Brand</span>
                            </label>
                            <input
                                name="productBrand"
                                type="text"
                                placeholder="Enter product brand"
                                className="input input-bordered w-full rounded-md text-sm bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Product Image URL */}
                        <div className="form-control col-span-1 sm:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Product Image-URL</span>
                            </label>
                            <input
                                name="productImageUrl"
                                type="url"
                                placeholder="Enter product image URL"
                                className="input input-bordered w-full rounded-md text-sm bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Query Title */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Query Title</span>
                            </label>
                            <input
                                name="queryTitle"
                                type="text"
                                placeholder="Pick your query title"
                                className="input input-bordered w-full rounded-md text-sm bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Boycotting Reason */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Boycotting Reason</span>
                            </label>
                            <input
                                name="boycottingReasonDetails"
                                type="text"
                                placeholder="Reason why you don't want this product"
                                className="input input-bordered w-full rounded-md text-sm bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* User Image URL */}
                        <div className="form-control col-span-1 sm:col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">User Image-URL</span>
                            </label>
                            <input
                                defaultValue={user?.photoURL}
                                disabled
                                name="userImageUrl"
                                type="url"
                                placeholder="Enter user image URL"
                                className="input input-bordered w-full rounded-md text-sm bg-gray-50 focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control col-span-1 sm:col-span-2">
                            <button className="btn btn-primary w-full rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
                                Submit Query
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddQueryForm;