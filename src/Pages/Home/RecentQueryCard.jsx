import React from 'react';

const RecentQueryCard = ({ query }) => {

    const { productImageUrl, productName, productBrand, queryTitle } = query;
    return (
        <div className="card card-compact bg-base-100 border w-full shadow-xl p-5">
            <figure>
                <img
                className='w-48'
                    src={productImageUrl}
                    alt="Product Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{queryTitle} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default RecentQueryCard;