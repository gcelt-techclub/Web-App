import React,{useState} from 'react'
import Sportsbar from "../components/SportsNavbar.jsx";

// import { SelectedSports } from '../context/context.js';


// Later we will pull it from DB
import {menuItem} from '../data/sportsList'


function FeeRecords() {
  const [activeSport,setActiveSport] = useState(menuItem[Math.floor(menuItem.length / 2)].title);

  const sportsContextObj = {
    activeSport : activeSport,
    toggleActiveSport : setActiveSport
  };

  return (
    <div>
      <Sportsbar />
    </div>

    
  )
}

export default FeeRecords


{/* <SelectedSports.Provider value={sportsContextObj}>
    <div>
      <Sportsbar />
    </div>
   </SelectedSports.Provider> */}