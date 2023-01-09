import React from 'react';
import "./Tournament.css";
import IconButton from '@mui/material/IconButton';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

function Matches() {
  return (
    <div>
        <div className='match'>
          <div className='firstbox'>
            <IconButton color="primary" aria-label="add to shopping cart" className='won_btn1'>
              <CheckRoundedIcon />
            </IconButton>
            <div className='score1'>Score</div>
            <div className='team1'>Team Name</div>
          </div>
          <div className='mid_diamond'><div className='vs'> VS </div></div>
          <div className='secondbox'>
            <div className='team2'>Team Name</div>
            <div className='score2'>Score</div>
            <IconButton color="primary" aria-label="add to shopping cart" className='won_btn2'>
              <CheckRoundedIcon />
            </IconButton>  
          </div>
        </div>
    </div>
  )
}

export default Matches