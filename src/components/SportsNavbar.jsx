import React, { useState, useContext } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import "./Sportsbar.css";

import {menuItem} from '../data/sportsList';

// import { SelectedSports } from "../context/context";

const SportsNavbar = () => {
  // const ctx = useContext(SelectedSports);

  return (
    <>
      <div className="sports-container">
        <div className="sportsbar">
          {menuItem.map((item, index) => (
            <li
              to={item.link}
              key={index}
              className="sports_id"
              value={item.title}
              // onClick={() => ctx.toggleActiveSport(item.title)}
            >
              <div className="holder">
                <div id="sports_icon">{item.icon}</div>
              </div>
              <div id="sports_title">{item.title}</div>
              <div
                // className={ctx.activeSport === item.title ? "selected" : ""}
              ></div>
            </li>
          ))}
        </div>

        {/* Rendered thru children props(First Version) */}
        {/* <main>{children}</main> */}
      </div>
    </>
  );
};

export default SportsNavbar;
