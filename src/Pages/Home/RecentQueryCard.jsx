// import React from 'react';

// const RecentQueryCard = ({ query }) => {

//     const { productImageUrl, productName, productBrand } = query;
//     return (
//         <div className="card card-compact bg-base-100 border w-full shadow-xl p-5">
//             <figure>
//                 <img
//                     className='w-48'
//                     src={productImageUrl}
//                     alt="Product Image" />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">{productName}</h2>
//                 <h2 className="card-title">{productBrand}</h2>
//                 <div className="card-actions justify-end">
//                     <button className="btn btn-primary">Buy Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RecentQueryCard;

import React from 'react';

const RecentQueryCard = ({ query }) => {
    const { productImageUrl, productName, productBrand } = query;

    return (
        <div className="card bg-white border rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-4">
            {/* Product Image */}
            <figure className="flex justify-center">
                <img
                    className="w-48 h-48 object-cover rounded-md"
                    src={productImageUrl}
                    alt={`${productName}`}
                />
            </figure>

            {/* Product Details */}
            <div className="card-body text-center space-y-4">
                <h2 className="text-lg font-bold text-gray-700">{productName}</h2>
                <h3 className="text-md text-gray-500 font-medium">{productBrand}</h3>

                {/* Action Buttons */}
                <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary bg-indigo-600 text-white rounded-lg px-6 py-2 hover:bg-indigo-500 focus:ring focus:ring-indigo-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentQueryCard;
