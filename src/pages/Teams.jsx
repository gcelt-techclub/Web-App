import React,{useState} from 'react'
import Sportsbar from "../components/SportsNavbar.jsx";

import { selectedSports } from '../context/context.js';

// Later we will pull it from DB
import {menuItem} from '../data/sportsList'


function Teams() {
  // const [activeSport,setActiveSport] = useState(menuItem[Math.floor(menuItem.length / 2)]);

  // const sportsContextObj = {
  //   activeSport : activeSport,
  //   toggleActiveSport : setActiveSport
  // };

  return (

    // <selectedSports.Provider value={sportsContextObj}>
    <div>
      <Sportsbar />
    </div>
    // </selectedSports.Provider>
  )
}

export default Teams