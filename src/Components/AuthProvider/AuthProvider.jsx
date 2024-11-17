import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from "../../firebase/Firebase.config";

export const authContext = createContext()

const AuthProvider = ({routes}) => {
    //receive all data 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    //register user account
    const handleRegister = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    //Login account
    const handleLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }
    // singOut account
    const handleSingOut = () =>{
        signOut(auth)
    }
    //sing in with google
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // update user profile
    const manageProfile = (name,image) =>{
        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }
    //send all function in context api
    const authInfo = {
        handleGoogleLogin,
        handleLogin,
        handleRegister,
        handleSingOut,
        manageProfile,
        user,
        setUser,
        loading
    }
    // create a observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            if(currentUser){
                setUser(currentUser)
                
            }else{
                setUser(null)
            }
            setLoading(false)

            // delete observer
            return ()=>{
                unsubscribe()
            }
        })
    },[])
    return (
        <div>
            <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;