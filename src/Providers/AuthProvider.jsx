import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignUp = () => {
        return signInWithPopup(auth,googleProvider)
    }


    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe()
    },[])

 

    const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      loading,
      googleSignUp,
    };

    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}


export default AuthProvider;

