// react hooks
import { useState, useEffect } from "react";

// firebase auth
import { auth } from "../firebase_config";

// import useAuthContext
import { useAuthContext } from "./useAuthContext";

// import google auth provider
import { signOut } from "firebase/auth";

// define useLogout
export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    // logout user
    const logout = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // await auth.signOut() // jali jinis
            await signOut(auth)
            
            // dispatch logout action
            dispatch({
                type: "LOGOUT",
            });
            // update state
            if (!isCancelled) {
                setError(null);
                setIsLoading(false);
            }
        } catch (error) {
                setError(error.message);
                setIsLoading(false);
        }
    };
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    return { error, isLoading, logout };
}