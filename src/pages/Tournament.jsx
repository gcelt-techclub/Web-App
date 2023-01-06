import React from 'react'
import Sportsbar from "../components/SportsNavbar.jsx";
import { Stack, Paper, styled, TextField, Grid, Button } from '@mui/material'

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
  return (
    <div>
      <Sportsbar />
      <Stack id="bottom_btn">
        <Stack direction="row" spacing={2}>
          <ColorButton variant="contained" size="large" > Matches  </ColorButton>
          <ColorButton variant="contained" size="large">Brackets</ColorButton>
        </Stack>
      </Stack>
    </div>
  )
}

export default Tournament