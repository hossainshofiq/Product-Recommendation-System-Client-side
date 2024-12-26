import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuthHook from '../Hooks/useAuthHook';

const AddRecommendationForm = () => {

    const {id} = useParams();
    const {user} = useAuthHook();
    const [recommendation, setRecommendation] = useState(null);
    console.log(id,user);

    useEffect(() => {
        fetch(`http://localhost:5000/queries/${id}`)
            .then((res) => res.json())
            .then((data) => setRecommendation(data))
            .catch((error) => console.error("Error fetching query details:", error));
    }, [id]);

    const handleAddRecommendation = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const addRecommendation = Object.fromEntries(formData.entries());
        console.log(addRecommendation);

        const queryRecommendation = {
            queryId: id,
            queryTitle: recommendation.queryTitle,
            productName: recommendation.productName,
            userEmail: recommendation.userEmail,
            userName: recommendation.userName,
            currentUserEmail: user.email,
            currentUserName: user.displayName,
            currentDateTime: formatDate(new Date()),
            ...addRecommendation
        }

        function formatDate(date) {
            const options = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            };
            return new Intl.DateTimeFormat('en-GB', options).format(date);
        }

        fetch('http://localhost:5000/recommendations', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(queryRecommendation)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
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
    );
};

export default AddRecommendationForm;