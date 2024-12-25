import React from 'react';
import useAuthHook from '../../Hooks/useAuthHook';
import axios from 'axios';
import { data, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyQueryUpdate = () => {

    const { user } = useAuthHook();
    const query = useLoaderData();
    const navigate = useNavigate();

    const { _id, productName, productBrand, productImageUrl, queryTitle, boycottingReasonDetails, userEmail, userName, userProfileImage } = query;
    // const { _id, } = query;
    console.log(_id);

    const handleUpdateQuery = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedQuery = Object.fromEntries(formData.entries());
        console.log(updatedQuery);

        // fetch(`http://localhost:5000/queries/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updatedQuery)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Equipment Updated successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //             navigate('/myQueries');
        //         }
        //     })

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
                <h1 className="text-5xl font-bold text-center mb-5">Update Your Query</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Query Title</span>
                            </label>
                            <select defaultValue='Pick your query title' name='queryTitle' className="select select-bordered w-full max-w-xs">
                                <option disabled>Pick your query title</option>
                                <option>Is there any Better product that gives me the same quality?</option>
                                <option>Are there more affordable alternatives to this product?</option>
                                <option>Which product provides the best value for money?</option>
                                <option>What are the best alternatives in the same price range?</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Boycotting Reason</span>
                            </label>
                            {/* <input name='boycott' type="text" placeholder="describe the reason of boycott" className="input input-bordered rounded-md" required /> */}
                            <textarea
                            defaultValue={boycottingReasonDetails}
                                name='boycottingReasonDetails'
                                placeholder="describe the reason of boycott"
                                className="textarea textarea-bordered textarea-xs text-sm w-full max-w-xs"></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User email</span>
                            </label>
                            <input defaultValue={user?.email} disabled name='userEmail' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input defaultValue={user?.displayName} disabled name='userName' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div>

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