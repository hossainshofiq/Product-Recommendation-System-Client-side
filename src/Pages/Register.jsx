import Lottie from 'lottie-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import register from '../assets/Lottie/register.json'
import useAuthHook from '../Hooks/useAuthHook';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {

    const { createUser, setUser, updateUserProfile } = useAuthHook();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const user = { name, email, password, photo }
        // console.log(user);

        // To-do: if have some free time, implement password validation and showPassword functionality
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Weak Password',
                text: 'Password must be at least 6 characters long and contain both uppercase and lowercase letters.',
            });
            return;
        }

        const userDoc = {
            displayName: name,
            photoURL: photo,
        };

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

                navigate(location?.state || '/');

                // const newUser = { name, email };
                // fetch('https://product-recommendation-system-server-zeta.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(newUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         // console.log("User created to db", data);
                //     })

                const newUser = { name, email };
                axios.post('https://product-recommendation-system-server-zeta.vercel.app/users', newUser)
                .then(res => {
                    // console.log("User created to db", res.data);
                })

                updateUserProfile(userDoc)
                    .then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registration Successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    //navigate to desired route
                    .catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.message,
                        });
                    })
                navigate('/');
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message,
                });
            })

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