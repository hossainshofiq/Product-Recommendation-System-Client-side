import React from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { FaGoogle } from 'react-icons/fa';

const GoogleSignIn = () => {

    const {googleSignIn} = useAuthHook();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
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