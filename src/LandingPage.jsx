import React from 'react'
import Paper from '@mui/material/Paper';
import { Button, Stack, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import "./App.css"

function LandingPage() {
  return (
    <div className='container'>
      <Paper className="login_card" style={{
        width: 500, height: 200, backgroundColor: '#2e325c',
        border: '2px solid #3b4285', borderRadius: '30px'
      }} elevation={8} >
        <Button className="btn" variant="outlined">
          <Stack direction="row" spacing={2}>
            <FcGoogle id="Google_icon" />
            <Typography variant={"h5"}>Sign In With Google</Typography>
          </Stack>
        </Button>
      </Paper>
    </div>
  )
}

export default LandingPage