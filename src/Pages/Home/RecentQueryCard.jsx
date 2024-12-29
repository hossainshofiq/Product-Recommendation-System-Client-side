import React from 'react';
import { Link } from 'react-router-dom';

const RecentQueryCard = ({ query }) => {
    const { productImageUrl, productName, productBrand, queryTitle, currentDateTime } = query;

    return (
        <div className="card bg-white border rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-4 m-5">

            <figure className="flex justify-center">
                <img
                    className="w-48 h-48 object-cover rounded-md"
                    src={productImageUrl}
                    alt={`${productName}`}
                />
            </figure>

            <div className="text-center space-y-4">
                <h2 className="text-lg font-bold text-gray-700">{productName}</h2>
                <h3 className="text-md text-gray-500 font-medium">{productBrand}</h3>
                <h3 className="text-md text-gray-500 font-medium">{queryTitle}</h3>
                <h3 className="text-md text-gray-500 font-medium">{currentDateTime}</h3>

                {/* <div className="card-actions justify-center mt-4">
                    <Link><button className="btn px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring ">
                        Buy Now
                    </button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default RecentQueryCard;
