import React,{useState} from 'react'
import Sportsbar from "../components/SportsNavbar.jsx";
import { Stack, Paper, styled, TextField, Grid, Button } from '@mui/material'
import Matches from './Tournament/Matches.jsx';
import Brackets from './Tournament/Brackets.jsx';

import { SelectedSports } from '../context/context.js';
// Later we will pull it from DB
import {menuItem} from '../data/sportsList'

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2e325c',
  border: '2px solid #3b4285',
  borderRadius: '20px',
  fontSize: 20,
  '&:hover': {
    backgroundColor: '#5442CC',
  },
  '&:active': {
    backgroundColor: '#5442CC',
  },
}));
function Tournament() {
  const [selected,setSelected] = useState("matches");

  const [activeSport,setActiveSport] = useState(menuItem[Math.floor(menuItem.length / 2)].title);

  const sportsContextObj = {
    activeSport : activeSport,
    toggleActiveSport : setActiveSport
  };

  return (
    <SelectedSports.Provider value={sportsContextObj}>
    <div>
      <Sportsbar />
      <Stack direction = "column">
        <Stack id="bottom_btn">
          <Stack direction="row" spacing={2}>
            <ColorButton variant="contained" size="large" onClick={() => {setSelected("matches")}}>Matches</ColorButton>
            <ColorButton variant="contained" size="large" onClick={() => {setSelected("brackets")}}>Brackets</ColorButton>
          </Stack>

          {selected === "matches" ? <Matches /> : <Brackets />}
        </Stack>


      </Stack>
    </div>
    </SelectedSports.Provider>
  )
}

export default Tournament