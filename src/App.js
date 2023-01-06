import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Teams from "./pages/Teams.jsx";
import Sports from "./pages/Sports.jsx";
import Tournament from "./pages/Tournament.jsx";
import Winners from "./pages/Winners.jsx";
import FeeRecords from "./pages/FeeRecords.jsx";
import SView from "./pages/Sports/View";
import SEdit from "./pages/Sports/Edit";
import SCreate from "./pages/Sports/Create";

import Error from "./pages/Error";

import LandingPage from './pages/LandingPage';


import {AuthContext} from './context/context';


const App = () => {

  const [authState,setAuthState] = useState({
    state : false,
    details : null
  });

  const authContextObj = {
    authState : authState,
    changeAuthState : setAuthState,
    currentUser : null
  }

  return (
    <AuthContext.Provider value = {authContextObj}>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<LandingPage />}/>
        </Route>
        
        <Route path="/admin" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="teams" element={<Teams />} />
          <Route path="sports" element={<Sports />} />
          <Route path="tournament" element={<Tournament />} />
          <Route path="winners" element={<Winners />} />
          <Route path="feeRecords" element={<FeeRecords />} />


          <Route path="sports/view/:sportsName" element={<SView />} />
          <Route path="sports/edit/:sportsName" element={<SEdit />} />
          <Route path="sports/create/:sportsName" element={<SCreate />} />
        </Route>

        <Route path="/user" element={<h1>User</h1> }>

        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    
  );
};

export default App;
