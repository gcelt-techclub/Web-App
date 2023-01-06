import React, { useState,useContext,useEffect } from 'react'
import Paper from '@mui/material/Paper';
import { Button, Stack, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import "../App.css";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

import { AuthContext } from '../context/context';

import {auth} from '../firebase_config';

import { redirect } from 'react-router-dom';


import {getUser} from '../API/user'

const provider = new GoogleAuthProvider();

function LandingPage() {
  const authContext = useContext(AuthContext);


  onAuthStateChanged(auth,(user) => {
    authContext.changeAuthState({
      state : !(user === null),
      currentUser : user
    });

  })


  const handleSignIn = async () => {
    console.log("Clicked")
    const res = await signInWithPopup(auth,provider);
    res.user ? authContext.changeAuthState(true) : authContext.changeAuthState(false);
  }

  const handleAlreadySignedIn = async () => {
    const currentUser = authContext.authState.currentUser;

    const userDetails = await getUser(currentUser.uid);
    return <h1>{JSON.stringify(userDetails)}</h1>
  }



//   authContext.authState ? (return (<h1>{JSON.stringify(authState.currentUser)}</h1>)) : (<div className='container'>
//   <Paper className="login_card" style={{
//     width: 500, height: 200, backgroundColor: '#2e325c',
//     border: '2px solid #3b4285', borderRadius: '30px'
//   }} elevation={8} >
//     <Button className="btn" variant="outlined" onClick={handleSignIn}>
//       <Stack direction="row" spacing={2}>
//         <FcGoogle id="Google_icon" />
//         <Typography variant={"h5"}>Sign In With Google</Typography>
//       </Stack>
//     </Button>
//   </Paper>
// </div>)

if(authContext.authState.state) handleAlreadySignedIn(); 
else return (
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

export default LandingPage