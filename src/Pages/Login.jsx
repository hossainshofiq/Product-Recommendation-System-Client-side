import React from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/Lottie/login.json'
import Lottie from 'lottie-react';

const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={login}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl border">
                    <form className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="enter your email" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="enter your password" className="input input-bordered rounded-md" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-md btn-primary">Login</button>
                        </div>

                        <p className='text-center mt-5'>New here? <Link className='underline font-bold text-red-600' to='/register'>create an account!</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;