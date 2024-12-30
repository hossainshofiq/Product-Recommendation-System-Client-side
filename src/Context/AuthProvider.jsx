import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = (email, password) => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (updatedUser) => {
        const { displayName, photoURL } = updatedUser;
        return updateProfile(auth.currentUser, { displayName, photoURL })
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('State Captured', currentUser?.email);
            //
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://product-recommendation-system-server-zeta.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        // console.log('Login', res.data);
                        setLoading(false);
                    })
            }
            else{
                axios.post('https://product-recommendation-system-server-zeta.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    // console.log('Logout', res.data);
                    setLoading(false);
                })
            }
            //
        })
        return () => {
            unSubscriber();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        updateUserProfile,
        setUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;