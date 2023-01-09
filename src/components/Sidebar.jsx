// useState hook
import { useState } from "react";

// Avatar component
import Avatar from "@mui/material/Avatar";

// react router dom
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

// useLogout hook
import { useLogout } from "../hooks/useLogout";

// styles
import "./Sidebar.css";

//import icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import { GiPodium, GiTrophyCup } from "react-icons/gi";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const menuItem = [
  {
    title: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    link: "/",
  },
  {
    title: "Teams",
    icon: <Groups3RoundedIcon />,
    link: "/teams",
  },
  {
    title: "Sports",
    icon: <SportsBaseballIcon />,
    link: "/sports",
  },
  {
    title: "Tournament",
    icon: <GiTrophyCup />,
    link: "/tournament",
  },
  {
    title: "Winner",
    icon: <GiPodium />,
    link: "/winners",
  },
  {
    title: "Fee Records",
    icon: <RequestQuoteRoundedIcon />,
    link: "/feeRecords",
  },
  
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // hook function to logout
  const { logout, error } = useLogout();

  // function to toggle dropdown
  const toggledp = () => setIsOpen((pvalue) => !pvalue)

  // function to logout
  const logoutHandler = async () => {
    console.log("logout");
    setIsOpen(false); // close the dropdown
    await logout();
    if (!error) {
      navigate("/signin")
    } else {
    console.error(error);
    }
    
  }
  return (
    <div className="main_body">
      <div className="container1">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">Logo</h1>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={`/admin${item.link}`}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div id="icon">{item.icon}</div>
              <div id="title">{item.title}</div>
            </NavLink>
            
          ))}
          <div className="bottom_section">
            <h4>A Collaboration of GCELT Tech Club and Sports Club</h4>
          </div>
        </div>
        <div className="container2">
          <div id="dp" onClick={toggledp}> 
          <Avatar sx={{ width: 50, height: 50 ,bgcolor: '#5442cc' }}>N</Avatar>
          <ul className = {`sub-menu-holder ${ isOpen ? ' open-menu' : ' '} `}>
            <li className="sub-menu">
              <Avatar sx={{ width: 30, height: 30 ,bgcolor: '#5442cc' }}>N</Avatar>
              <h4>Saptarshi Chatterjee</h4>
            </li>
            <hr></hr>
            <li className="sub-menu-out" onClick={logoutHandler}>
                <LogoutRoundedIcon />
                <h3 id="font">Log out</h3>
            </li>
          </ul>
          </div>
          <div className="Page_address">
              <div onClick={() => {
                // const presentLink = location.pathname.slice(1).split('/');
                // presentLink.pop();
                // presentLink.slice(1);
                // const newLink = presentLink.join('/');
                // console.log()
                // navigate(newLink);
              }}>{ <ArrowBackIosNewIcon /> } </div>
              <div className="address">{location.pathname.slice(1)}</div>  
          </div>
          <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
