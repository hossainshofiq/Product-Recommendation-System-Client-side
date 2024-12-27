import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuthHook from '../Hooks/useAuthHook';
import axios from 'axios';

const RecommendationForm = () => {

    function formatDate(date) {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }

    const { user } = useAuthHook();

    const queryData = useLoaderData();

    const [comments, setComments] = useState([]);


    useEffect (()=> {
        axios.get(`http://localhost:5000/recommendations/${queryData._id}`)
        .then (res => {
            setComments (res.data)
        })
    }, [])
    
    const handleAddRecommendation = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const addRecommendation = Object.fromEntries(formData.entries());
        // console.log(addRecommendation);


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
        }


        console.log(recommendFormDoc);


        fetch('http://localhost:5000/recommendations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recommendFormDoc)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    axios.put(`http://localhost:5000/incrementCount/${queryData._id}`)
                        .then(res => console.log(res.data));
                }
            })
    }

    return (
        <div>

            <div>
                <div className="card card-side border p-5 my-10 items-center">
                    <figure>
                        <img
                            className='w-52'
                            src={queryData?.productImageUrl}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{queryData?.productName}</h2>
                        <p>{queryData?.productBrand}</p>
                        <p>{queryData?.queryTitle}</p>
                        <p>{queryData?.boycottingReasonDetails}</p>

                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-16 rounded-full' src={queryData?.userProfileImage} alt="" />
                        <p>{queryData?.userEmail}</p>
                        <p>{queryData?.userName}</p>

                    </div>
                </div>
            </div>



            <div className="">
                <h1 className="text-5xl font-bold text-center mb-5">Add A Recommendation</h1>
                <div className="bg-base-100 w-full border shrink-0">
                    <form onSubmit={handleAddRecommendation} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recommendation Title</span>
                            </label>
                            <input name='recommendationTitle' type="text" placeholder="recommendation title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recommended Product Name</span>
                            </label>
                            <input name='recommendationProductName' type="text" placeholder="recommended product name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recommended Product Image</span>
                            </label>
                            <input name='recommendationProductImage' type="url" placeholder="recommended product image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recommendation Reason</span>
                            </label>
                            <input name='recommendationReason' type="text" placeholder="recommendation reason" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Recommendation</button>
                        </div>
                    </form>
                </div>
            </div>


            <div>
                {
                    // comments.map ((comment)=>)
                }
            </div>

        </div>
    );
};

export default RecommendationForm;