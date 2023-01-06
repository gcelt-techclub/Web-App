import React, { useState,useContext } from 'react'
import Paper from '@mui/material/Paper';
import { Button, Stack, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import "../App.css";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { AuthContext } from '../context/context';

import {auth} from '../firebase_config';
const provider = new GoogleAuthProvider();

function LandingPage() {

  const authContext = useContext(AuthContext);

  // const auth = getAuth();
  const user = auth.currentUser;
  console.log(user+ ' is current user')


  const handleSignIn = async () => {
    const res = await signInWithPopup(auth,provider);
    res.user ? authContext.updateMethod(true) : authContext.updateMethod(false);
  }

  const handleAlreadySignedIn = (authState) => {
    console.log(authState.currentUser);

    return <h1>{JSON.stringify(authState.currentUser)}</h1>
  }


  if(user) return handleAlreadySignedIn(auth);

  else{
    return (
      <div className='container'>
        <Paper className="login_card" style={{
          width: 500, height: 200, backgroundColor: '#2e325c',
          border: '2px solid #3b4285', borderRadius: '30px'
        }} elevation={8} >
          <Button className="btn" variant="outlined" onClick={handleSignIn}>
            <Stack direction="row" spacing={2}>
              <FcGoogle id="Google_icon" />
              <Typography variant={"h5"}>Sign In With Google</Typography>
            </Stack>
          </Button>
        </Paper>
      </div>
    )
  }
  
}

export default LandingPage