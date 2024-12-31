import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyRecommendations = () => {
    const { user } = useAuthHook();
    const [recommendation, setRecommendation] = useState([]);
    const [reFetch, setReFetch] = useState(1);

    useEffect(() => {
        axios.get(`https://product-recommendation-system-server-zeta.vercel.app/myRecommendations?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setRecommendation(res.data);
            });
    }, [user.email, reFetch]);

    const handleDeleteRecommendation = (_id, queryId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://product-recommendation-system-server-zeta.vercel.app/recommendations/${_id}`, {
                    method: 'DELETE',
                })
                // axios.delete(`https://product-recommendation-system-server-zeta.vercel.app/recommendations/${_id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            axios.put(`https://product-recommendation-system-server-zeta.vercel.app/decrementByDelete?id=${queryId}`).then(res => {
                                setReFetch(reFetch + 1);
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: 'Your Recommendation has been deleted.',
                                    icon: 'success',
                                });
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto text-center my-10">
            <h1 className="font-bold text-5xl mb-5 text-gray-800">
                My Recommendations: {recommendation.length}{' '}
            </h1>

            <div className="border rounded-md shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Your Product</th>
                                <th className="px-4 py-2">Recommended User Info</th>
                                <th className="px-4 py-2">Product Image & Name</th>
                                <th className="px-4 py-2">Recommendation Title</th>
                                <th className="px-4 py-2">Recommendation Reason</th>
                                <th className="px-4 py-2">Recommend Date</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {recommendation.map((recommend, index) => (
                                <tr
                                    key={recommend._id}
                                    className="hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3 text-gray-800">{recommend.productName}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold text-gray-800">
                                                    {recommend?.recommenderName}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {recommend?.recommenderEmail}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="avatar">
                                                <div className="mask rounded-full w-16 h-16">
                                                    <img
                                                        src={recommend?.recommendationProductImage}
                                                        alt="Product Avatar"
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-gray-600">
                                                {recommend.recommendationProductName}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-gray-800">{recommend.recommendationTitle}</td>
                                    <td className="px-4 py-3 text-gray-800">{recommend.recommendationReason}</td>
                                    <td className="px-4 py-3 text-gray-600">{recommend.currentDateTime}</td>
                                    <td className="flex gap-2 px-4 py-3">
                                        <button onClick={() => handleDeleteRecommendation(recommend._id, recommend.queryId)} className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">
                                            <MdDeleteForever />
                                            <span>Delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRecommendations;
