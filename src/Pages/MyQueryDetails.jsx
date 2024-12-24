import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyQueryDetails = () => {

    const query = useLoaderData();

    return (
        <div className='max-w-5xl mx-auto my-10'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-3xl'>Query Details for: {query?.productName}</h1>
                <Link to='/myQueries' className='btn'><button>Back to My Queries</button></Link>
            </div>

            <div>
                <div className="card card-side border p-5 my-10 items-center">
                    <figure>
                        <img
                            className='w-52'
                            src={query?.productImageUrl}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{query?.productName}</h2>
                        <p>{query?.productBrand}</p>
                        <p>{query?.queryTitle}</p>
                        <p>{query?.boycottingReasonDetails}</p>

                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-16 rounded-full' src={query?.userProfileImage} alt="" />
                        <p>{query?.userEmail}</p>
                        <p>{query?.userName}</p>

                    </div>
                </div>
            </div>
            {/* recommendation form section */}
            <div className="">
                {/* <div className="hero-content flex-col"> */}
                <h1 className="text-5xl font-bold text-center mb-5">Add A Recommendation</h1>
                    <div className="bg-base-100 w-full border shrink-0">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recommendation Title</span>
                                </label>
                                <input type="text" placeholder="recommendation title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recommended Product Name</span>
                                </label>
                                <input type="text" placeholder="recommended product name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recommended Product Image</span>
                                </label>
                                <input type="url" placeholder="recommended product image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recommendation Reason</span>
                                </label>
                                <input type="text" placeholder="recommendation reason" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Recommendation</button>
                                {query?._id}
                            </div>
                        </form>
                    </div>
                {/* </div> */}
            </div>

        </div>
    );
};

export default MyQueryDetails;