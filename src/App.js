import React from "react";
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
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/lp'>
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

          {/* <Route path="lp" element={<LandingPage />} /> */}

          <Route path="sports/view/:sportsName" element={<SView />} />
          <Route path="sports/edit/:sportsName" element={<SEdit />} />
          <Route path="sports/create/:sportsName" element={<SCreate />} />
        </Route>

        <Route path="/user" element={<h1>User</h1> }>

        </Route>
        
      </Routes>
    </BrowserRouter>

    
  );
};

export default App;
