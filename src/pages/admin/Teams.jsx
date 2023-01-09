import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Sportsbar from "../../components/SportsNavbar.jsx";

// import { SelectedSports } from '../context/context.js';

// Later we will pull it from DB
import { menuItem } from '../../data/sportsList'

import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import View from '@mui/icons-material/VisibilityOutlined';
import Edit from '@mui/icons-material/EditOutlined';
import { Paper, Grid, Divider } from '@mui/material';


function Teams() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()
  return (
    <div>
      <Sportsbar />
      <div className="space">
        <Paper className="sports_create_btn" style={{
          width: 200, height: 30, backgroundColor: '#2e325c',
          border: '2px solid #3b4285', borderRadius: '30px'
        }} elevation={8} >
          <div className="tag">Create Teams</div>
          <DataSaverOnOutlinedIcon id="add" onClick={() => navigate(`/admin/teams/create/${'untitled'}`)} />
        </Paper>
        <Grid container>
          <Grid item xs>
          <Paper key={index} className="card" style={{width: 280,height: 130, backgroundColor: '#2e325c',
			border: '2px solid #3b4285', borderRadius:'30px'}} elevation={8}>
			<div className="icon">{sports.icon}</div>
			<div className="title">{sports.title}</div>
			<div className="details">Team Size:{sports.size}<br/>Entry Fees:{sports.fees} </div>
			<div  id="view_icon" onClick={ () => navigate(`/admin/sports/view/${sports.title.toLowerCase()}`) } ><View /></div>
			<div id="edit_icon" onClick={ () => navigate(`/admin/sports/edit/${sports.title.toLowerCase()}`)}><Edit /></div>
			</Paper>
          </Grid>
          <Divider orientation="vertical" flexItem>
          </Divider>
          <Grid item xs>
            ILU
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Teams