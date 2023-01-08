import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// auth context
import { AuthContextProvider } from "./context/authContext";

// sports context
import { SportsContextProvider } from "./context/sportsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <SportsContextProvider>
                <App />
            </SportsContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
