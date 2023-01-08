import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { NavLink, Outlet, useOutletContext, useLocation } from "react-router-dom";
import "./Sidebar.css";

//import icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import { GiPodium } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Sidebar = (/*{ children }*/) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  const menuItem = [
    {
      title: "Dashboard",
      icon: <DashboardOutlinedIcon />,
      link: "/",
    },
    {
      title: "Teams",
      icon: <Groups3RoundedIcon />,
      link: "/dashboard",
    },
    {
      title: "Sports",
      icon: <SportsBaseballIcon />,
      link: "/sports",
    },
    {
      title: "Tournament",
      icon: <GiTrophyCup />,
      link: "/dashboard",
    },
    {
      title: "Winner",
      icon: <GiPodium />,
      link: "/dashboard",
    },
    {
      title: "Fee Records",
      icon: <RequestQuoteRoundedIcon />,
      link: "/dashboard",
    },
    {
      title: "Log out",
      icon: <LogoutRoundedIcon />,
      link: "/dashboard",
    },
  ];

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

        {/* Rendered thru children props(First Version) */}
        {/* <main>{children}</main> */}
        <div className="container2">
          <div id="dp"> <Avatar sx={{ width: 50, height: 50 ,bgcolor: '#5442cc' }}>N</Avatar></div>
          <div className="Page_address">
              <div >{ <ArrowBackIosNewIcon /> } </div>
              <div className="address">{location.pathname.slice(1)}</div>  
          </div>
          <br></br>
          <Outlet />
          </div>
        
      </div>
    </div>
  );
};

export default Sidebar;


