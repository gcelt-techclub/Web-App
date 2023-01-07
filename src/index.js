import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// auth context
import { AuthContextProvider } from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);


