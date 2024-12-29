import React from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {

    const { googleSignIn } = useAuthHook();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/');
                
                // token creation failed
                // const user = { email: email };
                // axios.post('http://localhost:5000/jwt')
                //     .then(res => {
                //         console.log(res.data);
                //     })
                //
                
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