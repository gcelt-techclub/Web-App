// react hooks
import { useState, useEffect } from "react";

// firebase auth
import { auth } from "../firebase_config";

// import useAuthContext
import { useAuthContext } from "./useAuthContext";

// import google auth provider
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// define useLogin
export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    // google auth provider
    const provider = new GoogleAuthProvider();

    // login user
    const login = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await signInWithPopup(auth, provider);
            if (!res) {
                throw new Error("Could not complete login");
            }
            // dispatch login action
            dispatch({
                type: "LOGIN",
                payload: auth.currentUser,
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
    return { error, isLoading, login };
}