import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyRecommendations = () => {

    // const recommended = useLoaderData();
    const [recommendation, setRecommendation] = useState([]);
    const { user } = useAuthHook();

    useEffect(() => {
        axios.get(`http://localhost:5000/recommendations?email=${user?.email}`)
            .then(res => setRecommendation(res.data))
    }, [user])

    // console.log(recommendation);

    const handleDeleteRecommendation = (_id) => {
        console.log(_id);

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
                        console.log(data);
                        if (data.deletedCount > 0) {
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
            <h1 className='font-bold text-5xl mb-5 text-gray-800'>My Recommendations</h1>

            <div className='border rounded-md shadow-lg overflow-hidden'>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                        {/* Table Head */}
                        <thead className='bg-blue-600 text-white'>
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">User Info</th>
                                <th className="px-4 py-2">Product Info</th>
                                <th className="px-4 py-2">Recommendation Reason</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-300">
                            {
                                recommendation.map((recommend, index) => (
                                    <tr
                                        key={recommend._id}
                                        className="hover:bg-gray-200 transition-colors duration-300"
                                    >
                                        <td className="px-4 py-3">{index + 1}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user?.photoURL}
                                                            alt="User Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-800">{user?.displayName}</div>
                                                    <div className="text-sm text-gray-500">{user?.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="text-gray-800">{recommend.productName}</div>
                                            <span className="badge badge-primary badge-sm">
                                                {recommend.recommendationTitle}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">{recommend.recommendationReason}</td>
                                        <td className="flex gap-2 px-4 py-3">
                                            <button onClick={() => handleDeleteRecommendation(recommend._id)} className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">
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