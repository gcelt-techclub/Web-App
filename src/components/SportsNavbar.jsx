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
          icon: <img src={Chess} height='65px' alt='chess_icon'/>,
          link: "/admin/teams",
        },
        {
          title: "Races",
          icon: <img src={Races} height='60px' alt='races_icon'/>,
          link: "/admin/teams",
        },
        {
          title: "Cricket",
          icon: <img src={Cricket} height='60px' alt='cricket_icon'/>,
          link: "/admin/teams",
        },
        {
          title: "Football",
          icon: <img src={Football} height='60px' />,
          link: "/admin/teams",
        },
        {
          title: "Volleyball",
          icon: <img src={Volleyball} height='60px'/>,
          link: "/admin/teams",
        },
        {
          title: "Badminton",
          icon: <img src={Badminton} height='60px' />,
          link: "/admin/teams",
        },
        {
          title: "Carrom",
          icon: <img src={Carrom} height='60px'/>,
          link: "/admin/teams",
        },
      ];
  return (
    <>
      <div className="sports-container">
        <div className="sportsbar">
          {menuItem.map((item, index) => (
            <li to={item.link}
              key={index} className="sports_id"  >
              <div class="holder"><div id="sports_icon">{item.icon}</div></div>
              <div id="sports_title">{item.title}</div>
              <div class="selected"></div>
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