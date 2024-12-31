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
    const [reFetch, setReFetch] = useState(1);

    useEffect(() => {
        axios.get(`https://product-recommendation-system-server-zeta.vercel.app/recommendations/${queryData._id}`)
            .then((res) => {
                setComments(res.data);
            });
    }, [reFetch]);

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
            userEmail: user?.email,
            userName: user?.displayName,
            recommenderEmail: queryData?.userEmail,
            recommenderName: queryData?.userName,
            currentDateTime: formatDate(new Date()),
            recommendationTitle: addRecommendation.recommendationTitle,
            recommendationProductName: addRecommendation.recommendationProductName,
            recommendationProductImage: addRecommendation.recommendationProductImage,
            recommendationReason: addRecommendation.recommendationReason,
        };

        // console.log(recommendFormDoc);

        fetch("https://product-recommendation-system-server-zeta.vercel.app/recommendations", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(recommendFormDoc),
        })
            .then((res) => res.json()
                .then((data) => {
                    if (data.insertedId) {
                        axios.put(`https://product-recommendation-system-server-zeta.vercel.app/incrementCount/${queryData._id}`)
                            .then((res) => {
                                if (res.data.modifiedCount) {
                                    setReFetch(reFetch + 1);
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
        <div className="space-y-12 px-5 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Query details Card */}
            <div className="flex flex-col lg:flex-row bg-base-100 shadow-xl border p-6 rounded-lg">
                <figure className="flex justify-center items-center bg-gray-100 rounded-lg p-4 mb-4 lg:mb-0 lg:mr-6 lg:w-1/3">
                    <img
                        className="w-48 h-48 object-cover rounded-lg"
                        src={queryData?.productImageUrl}
                        alt={queryData?.productName}
                    />
                </figure>

                <div className="flex-1 pb-2">
                    <h2 className="text-2xl font-bold">{queryData?.productName}</h2>
                    <p className="text-gray-500">Brand: {queryData?.productBrand}</p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Query:</span> {queryData?.queryTitle}
                    </p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Reason for Boycott:</span>{' '}
                        {queryData?.boycottingReasonDetails}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6 space-y-4">
                    <img
                        className="w-16 h-16 object-cover rounded-full shadow-lg"
                        src={queryData?.userProfileImage}
                        alt={queryData?.userName}
                    />
                    <div className="text-center">
                        <p className="font-semibold">{queryData?.userEmail}</p>
                        <p className="text-sm text-gray-500">{queryData?.userName}</p>
                    </div>
                </div>
            </div>

            {/* Recommendation Form */}
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="lg:col-span-8">
                    {/* <div className="flex justify-between items-center mb-6"> */}
                    <h1 className="text-xl lg:text-3xl font-semibold text-gray-800 mb-5">Add Recommendation: <span className="text-primary">{queryData.productName}</span> </h1>
                    <Link to="/queries" className="btn btn-outline items-center gap-2 mb-5 text-indigo-500 border-indigo-500 hover:bg-indigo-200 hover:text-black">
                        <FaArrowLeft />
                        Back to Queries
                    </Link>
                    {/* </div> */}
                    <div className="bg-white rounded-sm shadow-md p-6 border mb-5">
                        <form onSubmit={handleAddRecommendation} className="space-y-5">
                            <div className="form-control">
                                <label className="label font-medium">Recommendation Title</label>
                                <input
                                    name="recommendationTitle"
                                    type="text"
                                    placeholder="Title"
                                    className="input input-bordered rounded-sm w-full"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium">Recommended Product Name</label>
                                <input
                                    name="recommendationProductName"
                                    type="text"
                                    placeholder="Product name"
                                    className="input input-bordered rounded-sm w-full"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium">Recommended Product Image</label>
                                <input
                                    name="recommendationProductImage"
                                    type="url"
                                    placeholder="Image URL"
                                    className="input input-bordered rounded-sm w-full"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium">Recommendation Reason</label>
                                <input
                                    name="recommendationReason"
                                    type="text"
                                    placeholder="Why do you recommend this product?"
                                    className="input input-bordered rounded-sm w-full"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary w-full rounded-sm bg-indigo-600 text-white hover:bg-indigo-700 focus:ring focus:ring-indigo-300">Submit Recommendation</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="space-y-4 border rounded-md p-3 col-span-4 mb-5">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">All Recommendations:({comments.length})</h2>
                    <div className="divider"></div>
                    {comments.map((comment) => (
                        <div
                            key={comment._id}
                            className="bg-gray-50 p-3 rounded-lg border shadow-md hover:shadow-lg transition-all duration-200 hover:bg-sky-200"
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    src={comment?.recommendationProductImage}
                                    alt={comment?.recommendationProductName}
                                    className="w-20 h-20 object-cover rounded-full border"
                                />
                                <div>
                                    <p className="text-gray-600">Reason: <span className="italic">"{comment?.recommendationReason}"</span> </p>
                                    <p className="text-gray-600">Product Name: <span className="italic">"{comment?.recommendationProductName}"</span> </p>
                                    <p className="text-sm font-semibold text-gray-800">{comment?.userEmail} </p>
                                    <h4 className="text-sm font-semibold text-gray-800">{comment?.userName}</h4>
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


