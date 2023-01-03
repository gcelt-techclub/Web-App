import React from 'react';
import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";

function Navbar() {
  return (
    <div className='sidebar-container'>
      <ul>
        {NavbarData.map((val, key)=> {
          return( 
            <li key={key}> 
              " "
              <div>val.icon</div>
              <div>  {val.title} </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Navbar