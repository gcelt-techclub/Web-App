import React, { useState } from "react";

//import icons
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import View from '@mui/icons-material/VisibilityOutlined';
import Edit from '@mui/icons-material/EditOutlined';
import Paper from '@mui/material/Paper';
import Chess_i from "../assets/icons/chess2.png";
import Cricket_i from "../assets/icons/cricket2.png";
import Football_i from "../assets/icons/football2.png";
import Volleyball_i from "../assets/icons/volleyball2.png";
import Races_i from "../assets/icons/Race.png";
import Badminton_i from "../assets/icons/Badminton.png";
import Carrom_i from "../assets/icons/carrom2.png";

import "./Sports/Sports.css"

function Sports() {
  const [cards] = useState([
    {   title: "Carrom",
        icon: <img src={Carrom_i} height='60px' alt = 'carrom_icon'/>,
        size: "1",   fees: "20",    link: "",
    },
    {   title: "Chess",
        icon: <img src={Chess_i} height='60px' alt='chess_icon'/>,
        size: "1",   fees: "20",    link: "",
    },
    {   title: "Race",
        icon: <img src={Races_i} height='60px' alt='races_icon'/>,
        size: "1",   fees: "20",    link: "",
    },
    {   title: "Cricket",
    icon: <img src={Cricket_i} height='60px' alt='cricket_icon'/>,
    size: "1",   fees: "20",    link: "",
    },
    {   title: "Football",
    icon: <img src={Football_i} height='60px' alt='football_icon'/>,
    size: "1",   fees: "20",    link: "",
    },
    {   title: "Volleyball",
    icon: <img src={Volleyball_i} height='60px' alt='volleyball_icon'/>,
    size: "1",   fees: "20",    link: "",
    },
    {   title: "Badminton",
    icon: <img src={Badminton_i} height='60px' alt='badminton_icon'/>,
    size: "1",   fees: "20",    link: "/admin/winners",
    }
  ])
  return (
    <div className="space">
      <Paper className="sports_create_btn" style={{width: 200,height: 30, backgroundColor: '#2e325c',
        border: '2px solid #3b4285', borderRadius:'30px'}} elevation={8} >
          <div class="tag">Create Sports</div>
          <DataSaverOnOutlinedIcon id="add"/> 
      </Paper>
         
      <div className="cardholder">
		{ cards.map((sports,index) =>(
			<Paper key={index} className="card" style={{width: 280,height: 130, backgroundColor: '#2e325c',
			border: '2px solid #3b4285', borderRadius:'30px'}} elevation={8}>
			<div className="icon">{sports.icon}</div>
			<div className="title">{sports.title}</div>
			<div className="details">Team Size:{sports.size}<br/>Entry Fees:{sports.fees} </div>
			<View id="view_icon"/>
			<Edit id="edit_icon"/>
			</Paper>
		))}
      </div>
    </div>
    
  )
}

export default Sports