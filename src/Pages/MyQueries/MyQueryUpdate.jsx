import React from 'react';
import useAuthHook from '../../Hooks/useAuthHook';
import axios from 'axios';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MyQueryUpdate = () => {

    const { user } = useAuthHook();
    const query = useLoaderData();
    const navigate = useNavigate();

    const { _id, productName, productBrand, productImageUrl, queryTitle, boycottingReasonDetails, userEmail, userName, userProfileImage } = query;
   
    const handleUpdateQuery = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedQuery = Object.fromEntries(formData.entries());
        console.log(updatedQuery);

        axios.put(`http://localhost:5000/queries/${_id}`, updatedQuery)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myQueries');
                }
            })

    }
    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold text-center mb-5">Update Query: {productName} </h1>
                
                <Link to='/myQueries' className='btn'><button className='flex gap-2'><FaArrowLeft></FaArrowLeft> Back to My Queries</button></Link>
                
                <div className="card bg-base-100 w-full shrink-0 border">
                    <form onSubmit={handleUpdateQuery} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input defaultValue={productName} name='productName' type="text" placeholder="enter product name" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input defaultValue={productBrand} name='productBrand' type="text" placeholder="enter product brand" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image-URL</span>
                            </label>
                            <input defaultValue={productImageUrl} name='productImageUrl' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className='md:flex lg:flex gap-5 items-center'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Query Title</span>
                                </label>
                                <select defaultValue='queryTitle' name='queryTitle' className="select select-bordered w-full ">
                                    <option disabled>Pick your query title</option>
                                    <option>Is there any Better product that gives me the same quality?</option>
                                    <option>Are there more affordable alternatives to this product?</option>
                                    <option>Which product provides the best value for money?</option>
                                    <option>What are the best alternatives in the same price range?</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Boycotting Reason</span>
                                </label>
                                <textarea
                                    defaultValue={boycottingReasonDetails}
                                    name='boycottingReasonDetails'
                                    placeholder="describe the reason of boycott"
                                    className="textarea textarea-bordered textarea-xs text-sm w-full "></textarea>
                            </div>
                        </div>

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">User email</span>
                            </label>
                            <input defaultValue={user?.email} disabled name='userEmail' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div> */}

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input defaultValue={user?.displayName} disabled name='userName' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div> */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Image-URL</span>
                            </label>
                            <input defaultValue={user?.photoURL} disabled name='userImageUrl' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn rounded-md btn-primary">Update Query</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyQueryUpdate;