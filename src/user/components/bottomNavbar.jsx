import React, { useState } from "react";
import {Avatar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { NavLink, Outlet, useOutletContext, useLocation } from "react-router-dom";
import "./bottomNavbar.css";

//import icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import { GiPodium } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const bottomNavbar = (/*{ children }*/) => {


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
  ];

  return (
    <div className="main_contain">
     

        {/* Rendered thru children props(First Version) */}
        {/* <main>{children}</main> */}
        <div className="holder1">
          <div id="userdp"> <Avatar sx={{ width: 50, height: 50 ,bgcolor: '#5442cc' }}>N</Avatar></div>
          <br></br>
          <Outlet />
        </div>
        <div className="holder2">
            hbhbhb
            <BottomNavigation
                sx={{ width:'100vw',height:'10%', position:'absolute', bottom:0}}
                style={{ backgroundColor: '#2e325c', border: '1px solid #3b4285', borderRadius: '30px',color:'#fff' }}
            >
                {menuItem.map((item, index) => (
                <BottomNavigationAction
                    value={item.title}
                    icon={item.icon}
                >
                </BottomNavigationAction>            
          ))}

            </BottomNavigation>
        </div>
        
    </div>
  );
};

export default bottomNavbar;