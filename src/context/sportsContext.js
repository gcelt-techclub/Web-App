// Description: This file contains the sports context and reducer
// import react hooks
import { createContext, useReducer, useEffect } from "react";

// define sports context
export const SportsContext = createContext();

// define sports reducer
const sportsReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_SPORTS":
            
            return {
                ...state,
                selectedSports: action.payload
            }
    
        default:
            return state;
    }
}

// define sports context provider
export const SportsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(sportsReducer, {
        selectedSports: "Cricket"
    })
    useEffect(() => {
        
    }, [])
    return (
        <SportsContext.Provider value={{...state, dispatch}}>
            {children}
        </SportsContext.Provider>
    )
}