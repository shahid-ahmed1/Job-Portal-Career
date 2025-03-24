import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/farebase';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [loading ,setLoading] = useState(true);  // Add loading state

    const createUser = (email, password) => {
        setLoading(true);  // Set loading to true before any authentication action
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);  // Set loading to true before signing in
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        setLoading(true);  // Set loading to true before signing out
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
           console.log(currentUser?.email)
            if(currentUser?.email){
                const user = {email:currentUser.email}
                axios.post(`http://localhost:5000/jwt`,user,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                    setLoading(false);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',{},{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                    setLoading(false);
                })
            }
              // Once the user state is set, loading is finished
        });

        return () => unsubscribe();  // Cleanup on unmount
    }, []);

    const authInfo = {
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
    };

    // Add a conditional render to show loading screen while loading is true
    if (loading) {
        return <div>Loading...</div>; // Or use a loading spinner
    }

    // Return AuthContext.Provider with children after loading is finished
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
