// auth context hook
import { useAuthContext } from "./hooks/useAuthContext";
// styles
import "./App.css";

// react router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";

// pages
import Dashboard from "./pages/admin/Dashboard.jsx";
import Teams from "./pages/admin/Teams.jsx";
import Sports from "./pages/admin/Sports.jsx";
import Tournament from "./pages/admin/Tournament.jsx";
import Winners from "./pages/admin/Winners.jsx";
import FeeRecords from "./pages/admin/FeeRecords.jsx";

import SView from "./pages/admin/Sportsdir/View";
import SEdit from "./pages/admin/Sportsdir/Edit";
import SCreate from "./pages/admin/Sportsdir/Create";

// import TView from "./pages/admin/Teamsdir/View";
import TEdit from "./pages/admin/Teamsdir/Edit";
import TCreate from "./pages/admin/Teamsdir/Create";
import Error from "./pages/Error";
import LandingPage from "./pages/admin/LandingPage";

import Usernav from "./components/bottomNavbar"

const App = () => {
  const { authIsReady, user } = useAuthContext();

  console.log("user: ", user);

  return (
    <>
      {authIsReady && (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/signin"} />} />
            <Route
              path="/signin"
              index
              element={!user ? <LandingPage /> : <Navigate to={"/admin"} />}
            />
              <Route path="/admin" element={ user ? <Sidebar /> : <Navigate to={"/signin"} /> }>
                <Route
                  index
                  element={ <Dashboard /> }
                />
                <Route path="teams" element={<Teams />} />
                <Route path="sports" element={<Sports />} />
                <Route path="tournament" element={<Tournament />} />
                <Route path="winners" element={<Winners />} />
                <Route path="feeRecords" element={<FeeRecords />} />
                <Route path="sports/view/:sportsName" element={<SView />} />
                <Route path="sports/edit/:sportsName" element={<SEdit />} />
                <Route path="sports/create/:sportsName" element={<SCreate />} />
                <Route path="teams/edit/:teamName" element={<TEdit />} />
                <Route path="teams/create/:teamName" element={<TCreate />} />
              </Route>
              <Route path="/user" element={<Usernav />}></Route>
              <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      )}
    </>
  );
};

export default App;
