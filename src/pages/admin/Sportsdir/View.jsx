import React from 'react'
import { styled,Button } from '@mui/material'
import "../../../App.css"
import Sportscomponent from "./Component.jsx"

const ColorButton = styled(Button)(({  }) => ({
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

function View() {
  return (
    <form>
      <Sportscomponent isEditable={false}/>
    </form>

  )
}

export default View