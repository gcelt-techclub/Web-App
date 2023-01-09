import React from 'react'
import { Stack, styled, Grid, Button } from '@mui/material'
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

function Edit() {
  return (
    <form>
      <Sportscomponent isEditable={true}/>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={7.5} />
        <Grid item xs={4}>
          <Stack id="bottom_btn" style={{ display:'flex' , justifyContent:'end'}}>
           
            <Stack direction="row" spacing={2}>
              <ColorButton variant="contained" size="large" > Save  </ColorButton>
              <ColorButton variant="contained" size="large">Cancel</ColorButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </form>

  )
}

export default Edit