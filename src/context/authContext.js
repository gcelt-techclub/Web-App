// Description: This file contains the auth context and reducer
// import react hooks
import { createContext, useReducer, useEffect } from "react";

// import firebase  auth
import { auth } from "../firebase_config";

// define auth context
export const AuthContext = createContext();

// define auth reducer
export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        case "AUTH_IS_READY":
            return { ...state, user: action.payload, authIsReady: true };
        default:
            return state;
    }
};

// define auth context provider
export const AuthContextProvider = ({children}) => {
    const initialState = {
        authIsReady: false,
        user: null,
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        // check if user is logged in
        const unsub = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: "AUTH_IS_READY",
                    payload: user,
                });
                unsub();
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
