import { Button,Stack,Typography } from "@mui/material";
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { redirect } from "react-router";

const LandingPage = () => {
  const auth = getAuth();

  if(auth){
    return redirect('/admin');
  }

  
  return (
    <Button variant="outlined">
        <Stack direction="row" spacing={2}>
            <GoogleIcon/>
            <Typography variant={"h5"}>Sign In With Google</Typography>
        </Stack>
    </Button>
  )
}

export default LandingPage