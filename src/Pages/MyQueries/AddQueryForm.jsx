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

        // function formatDate(date) {
        //     const options = {
        //         day: '2-digit',
        //         month: '2-digit',
        //         year: 'numeric',
        //         hour: '2-digit',
        //         minute: '2-digit',
        //         hour12: true
        //     };
        //     return new Intl.DateTimeFormat('en-GB', options).format(date);
        // }


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
            <div className="hero-content w-full max-w-5xl flex flex-col items-center">
                {/* Header Section */}
                <h1 className="text-3xl font-extrabold text-center mb-5 text-indigo-600">
                    Add Your Query
                </h1>
                <Link to="/myQueries" className="btn btn-outline flex items-center gap-2 mb-5 text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-black">
                    <FaArrowLeft className="text-lg" />
                    Back to My Queries
                </Link>

                {/* Form Card */}
                <div className="card bg-white w-full border rounded-md shadow-lg p-8">
                    <form onSubmit={handleAddQuery} className="grid grid-cols-1 gap-6">
                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Product Name</span>
                            </label>
                            <input
                                name="productName"
                                type="text"
                                placeholder="Enter product name"
                                className="input input-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Product Brand */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Product Brand</span>
                            </label>
                            <input
                                name="productBrand"
                                type="text"
                                placeholder="Enter product brand"
                                className="input input-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Product Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Product Image-URL</span>
                            </label>
                            <input
                                name="productImageUrl"
                                type="url"
                                placeholder="Enter product image URL"
                                className="input input-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Query Title */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Query Title</span>
                            </label>
                            <select
                                defaultValue="Pick your query title"
                                name="queryTitle"
                                className="select select-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                            >
                                <option disabled>Pick your query title</option>
                                <option>Is there any better product that gives me the same quality?</option>
                                <option>Are there more affordable alternatives to this product?</option>
                                <option>Which product provides the best value for money?</option>
                                <option>What are the best alternatives in the same price range?</option>
                            </select>
                        </div> */}

                        {/* Query Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Query Title</span>
                            </label>
                            <input
                                name="queryTitle"
                                type="text"
                                placeholder="Pick your query title"
                                className="input input-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Boycotting Reason */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Boycotting Reason</span>
                            </label>
                            <textarea
                                name="boycottingReasonDetails"
                                placeholder="Describe the reason for boycott"
                                className="textarea textarea-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                            ></textarea>
                        </div> */}

                        {/* Boycotting Reason */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">Boycotting Reason</span>
                            </label>
                            <input
                                name="boycottingReasonDetails"
                                type="text"
                                placeholder="Reason why you don't want this product"
                                className="input input-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* User Email */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">User email</span>
                            </label>
                            <input defaultValue={user?.email} disabled name='userEmail' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div> */}

                        {/* User Name */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input defaultValue={user?.displayName} disabled name='userName' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div> */}

                        {/* User Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-700">User Image-URL</span>
                            </label>
                            <input
                                defaultValue={user?.photoURL}
                                disabled
                                name="userImageUrl"
                                type="url"
                                placeholder="Enter user image URL"
                                className="input input-bordered rounded-sm text-sm w-full bg-gray-50 focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control">
                            <button className="btn btn-primary w-full rounded-sm bg-indigo-600 text-white hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
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