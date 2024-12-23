import React from 'react';

const AddQueryForm = () => {

    const handleAddQuery = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);

        // const form = e.target;
        // const product_Name = form.product_Name.value;
        // const product_Brand = form.product_Brand.value;
        // const product_Photo = form.product_Photo.value;
        // const query_Title = form.query_Title.value;
        // const boycott = form.boycott.value;
        // const addQuery = {product_Name, product_Brand, product_Photo, query_Title, boycott}
        // console.log(addQuery);

    }
    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold text-center mb-5">Add Query Now</h1>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl border">
                    <form onSubmit={handleAddQuery} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input name='product_Name' type="text" placeholder="enter product name" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input name='product_Brand' type="text" placeholder="enter product brand" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image-URL</span>
                            </label>
                            <input name='product_Photo' type="url" placeholder="enter photo image url" className="input input-bordered rounded-md text-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Query Title</span>
                            </label>
                            <select defaultValue='Pick your query title' name='query_Title' className="select select-bordered w-full max-w-xs">
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
                            name='boycott'
                                placeholder="describe the reason of boycott"
                                className="textarea textarea-bordered textarea-xs text-sm w-full max-w-xs"></textarea>
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