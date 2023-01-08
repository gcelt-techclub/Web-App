// auth context hook
import { useAuthContext } from "./hooks/useAuthContext";
// styles
import "./App.css";

// react router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";

// pages
import Dashboard from "./admin/pages/Dashboard.jsx";
import Teams from "./admin/pages/Teams.jsx";
import Sports from "./admin/pages/Sports.jsx";
import Tournament from "./admin/pages/Tournament.jsx";
import Winners from "./admin/pages/Winners.jsx";
import FeeRecords from "./admin/pages/FeeRecords.jsx";
import SView from "./admin/pages/Sports/View";
import SEdit from "./admin/pages/Sports/Edit";
import SCreate from "./admin/pages/Sports/Create";
import Error from "./pages/Error";
import LandingPage from "./admin/pages/LandingPage";

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
