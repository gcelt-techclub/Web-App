import React, { useState } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import "./Sportsbar.css";

import Chess from "../assets/icons/Chess1.png";
import Races from "../assets/icons/Race.png";
import Cricket from "../assets/icons/Cricket1.png";
import Football from "../assets/icons/Football1.png";
import Volleyball from "../assets/icons/Volleyball1.png";
import Badminton from "../assets/icons/Badminton.png";
import Carrom from "../assets/icons/carrom2.png";
const SportsNavbar = () => {

  const menuItem = [
    {
      title: "Chess",
      icon: <img src={Chess} height='55px' />,
      
    },
    {
      title: "Races",
      icon: <img src={Races} height='50px' />,
      
    },
    {
      title: "Cricket",
      icon: <img src={Cricket} height='55px' />,
      
    },
    {
      title: "Football",
      icon: <img src={Football} height='50px' />,
      
    },
    {
      title: "Volleyball",
      icon: <img src={Volleyball} height='50px'/>,
      
    },
    {
      title: "Badminton",
      icon: <img src={Badminton} height='50px' />,
      
    },
    {
      title: "Carrom",
      icon: <img src={Carrom} height='55px'/>,
      
    },
  ];
  
    const [Selectedsports, setSelectedsports] = useState(menuItem[Math.floor(menuItem.length /2)].title)



  return (
    <>
      <div className="sports-container">
        <div className="sportsbar">
          {menuItem.map((item, index) => (
            <li to={item.link}
              key={index} className="sports_id" value={item.title}  onClick={() => setSelectedsports(item.title)}>
              <div className="holder"><div id="sports_icon">{item.icon}</div></div>
              <div id="sports_title">{item.title}</div>
              <div className={Selectedsports === item.title ? "selected" : ""}></div>
            </li>
          ))}
        </div>

        {/* Rendered thru children props(First Version) */}
        {/* <main>{children}</main> */}

      </div>
    </>
  );
};

export default SportsNavbar