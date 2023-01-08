import React,{useState} from 'react'
import Sportsbar from "../../components/SportsNavbar.jsx";

// import { SelectedSports } from '../context/context.js';

// Later we will pull it from DB
import {menuItem} from '../data/sportsList'


function Teams() {

  return (
    <div>
      <Sportsbar />
    </div>
  )
}

export default Teams