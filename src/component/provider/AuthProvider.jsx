
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/FireBase'
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ( {children} ) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

   


    
    const  createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password);
    }

    useEffect(() =>{
       

        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('user in the state change ', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        } 
    },[])


    const singIn = (email,password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true)

        return signOut(auth);
    }

 



    const authInfo = {
       loading,
        user,
        createUser,
        logOut,
        singIn,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;