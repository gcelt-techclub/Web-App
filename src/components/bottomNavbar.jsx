import React, { useState } from "react";
import { Avatar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { NavLink, Outlet, useOutletContext, useLocation } from "react-router-dom";
import "./bottomNavbar.css";

//import icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import { GiPodium } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

const bottomNavbar = () => {


  const usermenuItem = [
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
  ];

  return (
    <div className="main_contain">


      {/* Rendered thru children props(First Version) */}
      {/* <main>{children}</main> */}
      <div className="holder1">
        <div id="userdp"> <Avatar sx={{ width: 50, height: 50, bgcolor: '#5442cc' }}>N</Avatar></div>
        <br></br>
        <Outlet />
      </div>
      <div className="holder2">
        <div className="navbar">
          {usermenuItem.map((item, index) => (
            <NavLink
              to={`/admin${item.link}`}
              key={index}
              className="link2"
              activeclassname="active"
            >
              <div id="user_icon">{item.icon}</div>
              
              <div className="selected_item"></div>
            </NavLink>
          ))}
          <div id="midbtn"></div>
        </div>
      </div>

    </div>
  );
};

export default bottomNavbar;