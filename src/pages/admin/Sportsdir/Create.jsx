import React from 'react'
import { Stack, Paper, styled, TextField, Grid, Button } from '@mui/material'
import "../../../App.css"
import Sportscomponent from "./Component.jsx"

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

function Create() {
  return (
      <Sportscomponent isEditable={true} isNameEditable={true} data = {{name : "", rules : "", substitute: "",team_size : "", id : "",entry_fee: "",image_name: ""}}/>

  )
}

export default Create