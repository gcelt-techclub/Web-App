// auth context hook
// import { useAuthContext } from "./hooks/useAuthContext";
// styles
import "./App.css";

// react router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Sidebar from "./admin/components/Sidebar";

// pages
import Dashboard from "./admin/pages/Dashboard.jsx";
import Sports from "./admin/pages/Sports.jsx";
import SView from "./admin/pages/Sports/View";
import SEdit from "./admin/pages/Sports/Edit";
import SCreate from "./admin/pages/Sports/Create";
import Error from "./admin/pages/Error";
import Usernav from "./user/components/bottomNavbar"

const App = () => {
  // const { state: user, authIsReady } = useAuthContext();
  // console.log("user: ", user);
  return (
    <>
      {/* {authIsReady && <div>Loading...</div>}
      {!authIsReady && ( */}
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<Sidebar />}>
              <Route path="dashboard" element={<Dashboard />} />

              <Route path="sports" element={<Sports />} />
              
              <Route path="sports/view/:sportsName" element={<SView />} />
              <Route path="sports/edit/:sportsName" element={<SEdit />} />
              <Route path="sports/create/:sportsName" element={<SCreate />} />
            </Route>
            <Route path="/user"  element={<Usernav />}>
              <Route path="userdashboard" element={<Usernav />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      {/* )} */}
    </>
  );
};

export default App;
