import React from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GoogleSignIn = () => {

    const { googleSignIn } = useAuthHook();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state || '/');
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn w-full btn-success text-white'>
                <FaGoogle></FaGoogle> Login With Google
            </button>
        </div>
    );
};

export default GoogleSignIn;