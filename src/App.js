// auth context hook
import { useAuthContext } from "./hooks/useAuthContext";
// styles
import "./App.css";

// react router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";

// pages
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
import LandingPage from "./pages/LandingPage";

const App = () => {
  const { state: user, authIsReady } = useAuthContext();
  console.log("user: ", user);
  return (
    <>
      {authIsReady && <div>Loading...</div>}
      {!authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/signin"
              index
              element={!user ? <LandingPage /> : <Navigate to={"/admin"} />}
            />
            <Route path="/admin" element={<Sidebar />}>
              <Route
                index
                element={user ? <Dashboard /> : <Navigate to={"/signin"} />}
              />
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
            <Route path="/user" element={<h1>User</h1>}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
