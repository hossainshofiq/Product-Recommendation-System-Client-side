import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyRecommendations = () => {

    // const recommended = useLoaderData();
    const { user } = useAuthHook();
    const [recommendation, setRecommendation] = useState([]);
    const [reFetch, setReFetch] = useState(1);

    useEffect(() => {
        // cookie send to server
        axios.get(`http://localhost:5000/myRecommendations?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setRecommendation(res.data);
            })
    }, [user.email, reFetch])

    // console.log(recommendation);
    // console.log (recommendation?.queryId)
    // console.log (reFetch);

    const handleDeleteRecommendation = (_id, queryId) => {

        // console.log(_id, queryId);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/recommendations/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            axios.put(`http://localhost:5000/decrementByDelete?id=${queryId}`)
                                .then(res => {
                                    // console.log(res.data, "deleted count")
                                })
                            setReFetch(reFetch + 1);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Recommendation has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        })
    }

    return (
        <div className='max-w-7xl mx-auto text-center my-10'>
            <h1 className='font-bold text-5xl mb-5 text-gray-800'>My Recommendations: {recommendation.length} </h1>

            <div className='border rounded-md shadow-lg overflow-hidden'>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead className='bg-blue-600 text-white'>
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Recommended User Info</th>
                                <th className="px-4 py-2">Product Info</th>
                                <th className="px-4 py-2">Recommendation Reason</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {
                                recommendation.map((recommend, index) => (
                                    <tr key={recommend._id} className="hover:bg-gray-200 transition-colors duration-300">
                                        <td className="px-4 py-3">{index + 1}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={recommend?.recommendationProductImage}
                                                            alt="User Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-800">{recommend?.recommenderName}</div>
                                                    <div className="text-sm text-gray-500">{recommend?.recommenderEmail}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="text-gray-800">{recommend.productName}</div>
                                            <span className="badge badge-primary px-3 py-2 badge-sm">
                                                Recommendation Title: {recommend.recommendationTitle}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">{recommend.recommendationReason}</td>
                                        <td className="flex gap-2 px-4 py-3">
                                            <button onClick={() => handleDeleteRecommendation(recommend._id, recommend.queryId)} className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">
                                                <MdDeleteForever />
                                                <span>Delete</span>
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRecommendations;