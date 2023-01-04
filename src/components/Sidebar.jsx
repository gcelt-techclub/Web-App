import React, { useState } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
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
        </div>

        {/* Rendered thru children props(First Version) */}
        {/* <main>{children}</main> */}
        <div className="container2">
          <div id="dp"></div>
          <div className="Page_address">
              <div >{ <ArrowBackIosNewIcon /> } </div>
              <div className="address">Pagename / subPages</div>  
          </div>
          <br></br>
          <Outlet />
          </div>
        
      </div>
    </div>
  );
};

export default Sidebar;


