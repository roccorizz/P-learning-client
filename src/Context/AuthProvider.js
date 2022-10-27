import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();


const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user)

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (currentuser) => {
            console.log(currentuser);

            setUser(currentuser);

            setLoading(false);


        });
        return () => {
            unsubscriber();
        }

    }, [])
    const SignOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const authInfo = { user, providerLogin, SignOut, loading, forgetPassword, createUser, loginUser, updateUserProfile, setLoading };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;