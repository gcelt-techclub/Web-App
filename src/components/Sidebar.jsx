import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

//import icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import { GiPodium } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const menuItem=[
        {
            title:"Dashboard",
            icon: <DashboardOutlinedIcon/>,
            link: "/"
        },
        {
            title:"Teams",
            icon: <Groups3RoundedIcon/>,
            link: "/teams"
        },
        {
            title:"Sports",
            icon: <SportsBaseballIcon/>,
            link: "/sports"
        },
        {
            title:"Tournament",
            icon: <GiTrophyCup/>,
            link: "/tournament"
        },
        {
            title:"Winner",
            icon: <GiPodium/>,
            link: "/winners"
        },
        {
            title:"Fee Records",
            icon: <RequestQuoteRoundedIcon/>,
            link: "/feeRecords"
        },
        {
            title:"Log out",
            icon: <LogoutRoundedIcon/>,
            link: "/dashboard"
        },
    ]
    return (
        <div className="container">
           <div className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.link} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.title}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;