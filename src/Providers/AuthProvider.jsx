/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutFn = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, signedInUser => {
      console.log(signedInUser, "inside auth state server");
      setUser(signedInUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  } , [])


  const authInfo = {
    user,
    loading,
    createUser,
    SignInUser, signOutFn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
