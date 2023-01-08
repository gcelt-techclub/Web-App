import { useContext } from 'react';
import { SportsContext } from '../context/sportsContext';

// custom hook to use sports context within scope
export const useSportsContext = () => {
    const context = useContext(SportsContext);
    if (!context) {
        throw new Error("useSportsContext must be used within SportsContextProvider");
    }
    return context;
}