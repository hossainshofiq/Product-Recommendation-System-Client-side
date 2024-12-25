import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthHook from '../../Hooks/useAuthHook';

const AddQueryForm = () => {

    const { user } = useAuthHook();
    const navigate = useNavigate();

    const handleAddQuery = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);

        // fetch('http://localhost:5000/queries', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(initialData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 position: "center",
        //                 icon: "success",
        //                 title: "Your query added successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             navigate('/myQueries')
        //         }
        //     })

        const queryData = {
            ...initialData,
            userEmail: user.email,
            userName: user.displayName,
            userProfileImage: user.photoURL,
            currentDateTime: new Date().toISOString(),
            recommendationCount: 0,
        };


        axios.post('http://localhost:5000/queries', queryData)
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
        <div className="hero">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold text-center mb-5">Add Query Now</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
                    <form onSubmit={handleAddQuery} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input name='productName' type="text" placeholder="enter product name" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input name='productBrand' type="text" placeholder="enter product brand" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image-URL</span>
                            </label>
                            <input name='productImageUrl' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
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
                                name='boycottingReasonDetails'
                                placeholder="describe the reason of boycott"
                                className="textarea textarea-bordered textarea-xs text-sm w-full max-w-xs"></textarea>
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
                            <button className="btn rounded-md btn-primary">Add Query</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQueryForm;