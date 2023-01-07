import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

// custom hook to use auth context within scope
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within a AuthContextProvider');
    }
    return context;
}
