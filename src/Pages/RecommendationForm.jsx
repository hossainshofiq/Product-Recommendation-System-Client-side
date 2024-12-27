import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuthHook from "../Hooks/useAuthHook";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const RecommendationForm = () => {

    const { user } = useAuthHook();
    const queryData = useLoaderData();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/recommendations/${queryData._id}`)
            .then((res) => {
                setComments(res.data);
            });
    }, []);

    const formatDate = (date) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        return new Intl.DateTimeFormat("en-GB", options).format(date);
    };

    const handleAddRecommendation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const addRecommendation = Object.fromEntries(formData.entries());

        const recommendFormDoc = {
            queryId: queryData._id,
            queryTitle: queryData.queryTitle,
            productName: queryData.productName,
            userEmail: queryData.userEmail,
            userName: queryData.userName,
            currentUserEmail: user?.email,
            currentUserName: user?.displayName,
            currentDateTime: formatDate(new Date()),
            recommendationTitle: addRecommendation.recommendationTitle,
            recommendationReason: addRecommendation.recommendationReason,
            recommendationProductName: addRecommendation.recommendationProductName,
            recommendationProductImage: addRecommendation.recommendationProductImage,
        };

        fetch("http://localhost:5000/recommendations", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(recommendFormDoc),
        })
            .then((res) => res.json()
                .then((data) => {
                    if (data.insertedId) {
                        // console.log('Recommendation added successfully');
                        axios.put(`http://localhost:5000/incrementCount/${queryData._id}`)
                            .then((res) => {
                                // console.log(res.data);
                                if (res.data.modifiedCount) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Add recommendation Successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            });
                        e.target.reset();
                    }
                })
            );
    };

    return (
        <div className="space-y-12 px-6 py-8 max-w-6xl mx-auto">
            {/* Query details Card */}
            <div className="card lg:card-side bg-base-100 shadow-xl border p-6 my-10 rounded-lg">
                <figure className="flex justify-center items-center bg-gray-100 rounded-lg p-4">
                    <img
                        className="w-52 h-52 object-cover rounded-lg"
                        src={queryData?.productImageUrl}
                        alt={queryData?.productName}
                    />
                </figure>

                <div className="card-body flex-1">
                    <h2 className="card-title text-2xl font-bold">{queryData?.productName}</h2>
                    <p className="text-gray-500">Brand: {queryData?.productBrand}</p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Query:</span> {queryData?.queryTitle}
                    </p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Reason for Boycott:</span>{' '}
                        {queryData?.boycottingReasonDetails}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center border-l pl-6 space-y-4">
                    <img
                        className="w-16 h-16 object-cover rounded-full shadow-lg"
                        src={queryData?.userProfileImage}
                        alt={queryData?.userName}
                    />
                    <div className="text-center">
                        <p className="font-semibold">{queryData?.userName}</p>
                        <p className="text-sm text-gray-500">{queryData?.userEmail}</p>
                    </div>

                    {/* <div className="flex flex-col items-center gap-5">
                        <h4>recommendationCount: {queryData?.recommendationCount}</h4>
                        <Link to={`/recommendationForm/${query._id}`}><button className='btn btn-success'>Recommend</button></Link>
                    </div> */}
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                {/* Recommendation Form */}
                <div className="col-span-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-semibold text-gray-800">Add A Recommendation</h1>
                        <Link to="/queries" className="btn btn-outline flex items-center gap-2">
                            <FaArrowLeft />
                            Back to Queries
                        </Link>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-6 border">
                        <form onSubmit={handleAddRecommendation} className="space-y-5">
                            <div className="form-control">
                                <label className="label font-medium">Recommendation Title</label>
                                <input
                                    name="recommendationTitle"
                                    type="text"
                                    placeholder="Title"
                                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium">Recommended Product Name</label>
                                <input
                                    name="recommendationProductName"
                                    type="text"
                                    placeholder="Product name"
                                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium">Recommended Product Image</label>
                                <input
                                    name="recommendationProductImage"
                                    type="url"
                                    placeholder="Image URL"
                                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium">Recommendation Reason</label>
                                <textarea
                                    name="recommendationReason"
                                    placeholder="Why do you recommend this product?"
                                    className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary w-full">Submit Recommendation</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="col-span-4 space-y-4 border rounded-md p-3">
                    <h2 className="text-2xl font-medium text-gray-800">User Recommendations:{comments.length} </h2>
                    <div className="divider"></div>
                    {comments.map((comment) => (
                        <div
                            key={comment._id}
                            className="bg-gray-50 p-4 rounded-lg border shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            <p className="text-gray-600 italic mb-2">{comment?.recommendationReason}</p>
                            <div className="flex items-center space-x-3">
                                <img
                                    src={comment?.recommendationProductImage}
                                    alt="Commenter"
                                    className="w-12 h-12 rounded-full border"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800">{comment?.currentUserName}</h4>
                                    <p className="text-xs text-gray-500">{comment?.currentDateTime}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendationForm;

