import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import register from '../assets/Lottie/register.json'

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const user = {name, email, password, photo}
        console.log(user);

    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={register}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl border">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-5">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name='name' type="text" placeholder="enter your full name" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="enter your email" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="enter your password" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="url" placeholder="enter your photo url" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-md btn-primary">Register</button>
                        </div>

                        <p className='text-center mt-5'>Already Registered? <Link className='underline font-bold text-blue-700' to='/login'>Login!</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;