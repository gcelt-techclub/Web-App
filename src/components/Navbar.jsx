import React from 'react';
import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";

function Navbar() {
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-list'>
        {NavbarData.map((val, key)=> {
          return( 
            <li className='row'
                key={key} onClick={()=> {window.location.pathname = val.link}}> 
              <div id="icon">{val.icon}</div>
              <div id="title">  {val.title} </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Navbar