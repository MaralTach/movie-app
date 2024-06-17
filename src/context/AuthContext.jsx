import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";



const AuthContext= createContext()

export const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, [])
  

  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password);

    navigate("/login")
    toastSuccessNotify("Sign Up Successful")
        console.log(userCredential)
    
    } catch (error) {
      toastErrorNotify(error.message)
    }
  };

 const signIn = async (email, password) => {
     try {
        const userCredential =  await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
        toastSuccessNotify("Sign In Successful")
        console.log(userCredential)
     } catch (error) {
        console.log(error)
        toastErrorNotify(error.message)
     }
 }

 const logOut = () => {
     signOut(auth)
     .then(()=> {
        toastSuccessNotify("Logout Successful")
     })
     .catch((error) => toastErrorNotify(error.message))
 }

 const userObserver =()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log('logged in')
      const {email, displayName, photoURL} = user
      setCurrentUser({email, displayName, photoURL})
    } else {
      // console.log('logged out')
      setCurrentUser(false)
    }
  });
  
 }

  const values = { currentUser,createUser, signIn,  logOut };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
