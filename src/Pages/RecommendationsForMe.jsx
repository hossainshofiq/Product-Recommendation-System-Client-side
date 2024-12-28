import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import axios from 'axios';

const RecommendationsForMe = () => {
    const { user } = useAuthHook();

    const [recommendationsForMe, setRecommendationsForMe] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/recommendationsForMe?email=${user?.email}`)
            .then(res => {
                setRecommendationsForMe(res.data);
            })
    }, [user])
    return (
        <div className='max-w-7xl mx-auto text-center my-10'>
            <h1 className='font-bold text-5xl mb-5 text-gray-800'>Recommendations For Me</h1>

            <div className='border rounded-md shadow-lg overflow-hidden'>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                        {/* Table Head */}
                        <thead className='bg-blue-600 text-white'>
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Recommender User Info</th>
                                <th className="px-4 py-2">Product Info</th>
                                <th className="px-4 py-2">Recommendation Reason</th>
                                <th className="px-4 py-2">Date</th>
                                {/* <th className="px-4 py-2">Actions</th> */}
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-300">
                            {
                                recommendationsForMe.map((recommend, index) => (
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
                                            <span className="badge badge-primary px-3 py-2 badge-sm">
                                                Recommendation Title: {recommend.recommendationTitle}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">{recommend.recommendationReason}</td>
                                        {/* <td className="px-4 py-3">
                                            <button className="btn btn-sm btn-primary">Details</button>
                                        </td> */}
                                        <td className="px-4 py-3">
                                            <span>{recommend.currentDateTime}</span>
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

export default RecommendationsForMe;