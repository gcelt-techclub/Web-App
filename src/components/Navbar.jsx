import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { NavbarData } from "./NavbarData";

//import some icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import { GiPodium } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


const Navbar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
      {
        title:"Dashboard",
        icon: <DashboardOutlinedIcon/>,
        link: "/home"
      },
      {
        title:"Teams",
        icon: <Groups3RoundedIcon/>,
        link: "/home"
      },
      {
        title:"Sports",
        icon: <SportsBaseballIcon/>,
        link: "/home"
      },
      {
        title:"Tournament",
        icon: <GiTrophyCup/>,
        link: "/home"
      },
      {
        title:"Winner",
        icon: <GiPodium/>,
        link: "/home"
      },
      {
        title:"Fee Records",
        icon: <RequestQuoteRoundedIcon/>,
        link: "/home"
      },
      {
        title:"Log out",
        icon: <LogoutRoundedIcon/>,
        link: "/home"
      },
    ]
    return (
        <div className="sidebar-container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <ul className='sidebar-list'>
               { menuItem.map((key, val)=>{
                return(
                       <NavLink to={val.path} key={key} className="link" activeclassName="active">
                           <div id="icon">{val.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{val.name}</div>
                       </NavLink>
                   )
               })}
              </ul> 
           </div>
        </div>
    );
};

export default Navbar