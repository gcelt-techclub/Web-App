import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Teams from './pages/Teams.jsx';
import Sports from './pages/Sports.jsx';
import Tournament from './pages/Tournament.jsx';
import Winners from './pages/Winners.jsx';
import FeeRecords from './pages/FeeRecords.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/feeRecords" element={<FeeRecords />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;