import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import useAuthHook from '../Hooks/useAuthHook';
import { FaArrowLeft } from 'react-icons/fa';

const MyQueryDetails = () => {

    // const { id } = useParams();
    // const { user } = useAuthHook();
    const query = useLoaderData();
    // const location = useLocation();


    // const [recommendation, setRecommendation] = useState(null);
    // console.log(location);
    // console.log(id,user);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/queries/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setRecommendation(data))
    //         .catch((error) => console.error("Error fetching query details:", error));
    // }, [id]);

    // const handleAddRecommendation = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);
    //     const addRecommendation = Object.fromEntries(formData.entries());
    //     console.log(addRecommendation);

    //     const queryRecommendation = {
    //         queryId: id,
    //         queryTitle: recommendation.queryTitle,
    //         productName: recommendation.productName,
    //         userEmail: recommendation.userEmail,
    //         userName: recommendation.userName,
    //         currentUserEmail: user.email,
    //         currentUserName: user.displayName,
    //         currentDateTime: formatDate(new Date()),
    //         ...addRecommendation
    //     }

    //     function formatDate(date) {
    //         const options = {
    //             day: '2-digit',
    //             month: '2-digit',
    //             year: 'numeric',
    //         };
    //         return new Intl.DateTimeFormat('en-GB', options).format(date);
    //     }

    //     fetch('http://localhost:5000/recommendations', {
    //         method: 'POST',
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify(queryRecommendation)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }

    return (
        // <div className='max-w-5xl mx-auto my-10'>
        //     <div className='flex justify-between items-center'>
        //         <h1 className='font-semibold text-3xl'>Query Details for: {query?.productName}</h1>
        //         <Link to='/myQueries' className='btn'><button className='flex gap-2'><FaArrowLeft></FaArrowLeft> Back to My Queries</button></Link>
        //     </div>

        //     <div>
        //         <div className="card card-side border p-5 my-10 items-center">
        //             <figure>
        //                 <img
        //                     className='w-52'
        //                     src={query?.productImageUrl}
        //                     alt={query?.productName} />
        //             </figure>
        //             <div className="card-body">
        //                 <h2 className="card-title">{query?.productName}</h2>
        //                 <p>{query?.productBrand}</p>
        //                 <p>{query?.queryTitle}</p>
        //                 <p>{query?.boycottingReasonDetails}</p>

        //             </div>
        //             <div className="flex flex-col items-center">
        //                 <img className='w-16 rounded-full' src={query?.userProfileImage} alt="" />
        //                 <p>{query?.userEmail}</p>
        //                 <p>{query?.userName}</p>

        //             </div>
        //         </div>
        //     </div>

        //     {/* recommendation form section */}
        //     {/* <div className="">
        //         <h1 className="text-5xl font-bold text-center mb-5">Add A Recommendation</h1>
        //         <div className="bg-base-100 w-full border shrink-0">
        //             <form onSubmit={handleAddRecommendation} className="card-body">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Recommendation Title</span>
        //                     </label>
        //                     <input name='recommendationTitle' type="text" placeholder="recommendation title" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Recommended Product Name</span>
        //                     </label>
        //                     <input name='recommendationProductName' type="text" placeholder="recommended product name" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Recommended Product Image</span>
        //                     </label>
        //                     <input name='recommendationProductImage' type="url" placeholder="recommended product image url" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Recommendation Reason</span>
        //                     </label>
        //                     <input name='recommendationReason' type="text" placeholder="recommendation reason" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control mt-6">
        //                     <button className="btn btn-primary">Add Recommendation</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div> */}

        // </div>

        <div className="max-w-5xl mx-auto my-10">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-3xl">
                    Query Details for: <span className="text-primary">{query?.productName}</span>
                </h1>
                <Link to="/myQueries" className="btn btn-outline flex items-center gap-2">
                    <FaArrowLeft className="text-lg" />
                    Back to My Queries
                </Link>
            </div>

            {/* Card Section */}
            <div className="card lg:card-side bg-base-100 shadow-xl border p-6 my-10 rounded-lg">
                <figure className="flex justify-center items-center bg-gray-100 rounded-lg p-4">
                    <img
                        className="w-52 h-52 object-cover rounded-lg"
                        src={query?.productImageUrl}
                        alt={query?.productName}
                    />
                </figure>

                <div className="card-body flex-1">
                    <h2 className="card-title text-2xl font-bold">{query?.productName}</h2>
                    <p className="text-gray-500">Brand: {query?.productBrand}</p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Query:</span> {query?.queryTitle}
                    </p>
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Reason for Boycott:</span>{' '}
                        {query?.boycottingReasonDetails}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center border-l pl-6 space-y-4">
                    <img
                        className="w-16 h-16 object-cover rounded-full shadow-lg"
                        src={query?.userProfileImage}
                        alt={query?.userName}
                    />
                    <div className="text-center">
                        <p className="font-semibold">{query?.userName}</p>
                        <p className="text-sm text-gray-500">{query?.userEmail}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyQueryDetails;