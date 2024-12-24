import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyQueryCard = ({ query }) => {

    const { _id } = query

    const handleQueryDelete = (_id) => {
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
                fetch(`http://localhost:5000/queries/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl my-10 border mx-auto">
            <figure className="px-10 pt-10">
                <img
                    src={query.productImageUrl}
                    alt={query.productName}
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{query.productName}</h2>
                <p>{query.queryTitle}</p>
                <div className="card-actions">
                    <Link to={`/myQueries/queryDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                    <Link to={`/queryUpdate/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>

                    <button onClick={() => handleQueryDelete(_id)} className="btn btn-primary">Delete</button>

                    {/* <button className="btn btn-primary">Update</button>
                    <button className="btn btn-primary">Delete</button> */}
                </div>
            </div>
        </div>
    );
};

export default MyQueryCard;