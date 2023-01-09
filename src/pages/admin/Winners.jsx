import React from 'react'
import { Paper, Grid, Divider } from '@mui/material';
import Avatar from "@mui/material/Avatar";
import Sportsbar from "../../components/SportsNavbar.jsx";
import Podium from "../../assets/icons/Winner.png"
import { FcLeft } from 'react-icons/fc';
// import { SelectedSports } from '../context/context.js';

function Winners() {


  return (
    <div>
      <Sportsbar />
      <div>
        <Grid container>
          <Grid item xs>
            <img src={Podium} height='300px' />
          </Grid>
          <Divider orientation="vertical" flexItem color='#fff'>
          </Divider>
          <Grid item xs style={{marginLeft:20}}>
            <div className="positions" style={{
                             display:'flex', alignItems: 'center', color:'#fff',
                  fontSize:20, justifyContent:'space-evenly'
                }}>
              1st
              <Paper className="pos_card" style={{
                  width: 400, height: 40, backgroundColor: '#2e325c',
                  border: '2px solid #3b4285', borderRadius: '10px',
                  display:'flex', alignItems: 'center', color:'#fff',
                  fontSize:20, justifyContent:'space-around',
                }} elevation={8}>
                <div style={{flex:'10%' , display:'grid', placeItems: 'center'}}>
                  <Avatar sx={{ width: 30, height: 30, bgcolor: '#5442cc' }}>N</Avatar></div>
                <div id='Tname' style={{flex:'70%'}}> Team name </div>
                <div id='Year' style={{ flex:'20%' }}> Year </div>
              </Paper>
            </div>

          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Winners