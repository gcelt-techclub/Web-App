import React from 'react'
import { Stack, Paper, styled, TextField, Grid, Divider } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Sportsbar from "../../components/SportsNavbar.jsx";
import Football_i from "../../assets/icons/football2.png";
import RupeeIcon from '@mui/icons-material/CurrencyRupee';


const CSSTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true, style: { fontSize: 20, backgroundColor: '#2e325c', border: '2px solid #3b4285', borderRadius: '10px', color: '#fff', } }}
    InputLabelProps={{ style: { fontSize: 20, color: '#fff' } }} {...props} />
))(() => ({}));

const RedTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true, style: { fontSize: 20, backgroundColor: '#F75555', border: '2px solid #F75555', borderRadius: '30px', color: '#fff', padding: 1, } }}
    InputLabelProps={{ style: { fontSize: 20, color: '#fff' } }} {...props} />
))(() => ({}));
function FeeRecords() {


  return (
    <div>
      <Sportsbar />
      <div>
        <Grid container>
          <Grid item xs>
            <Paper className="team_div" style={{
              width: 520, height: 50, backgroundColor: '#2e325c',
              border: '2px solid #3b4285', borderRadius: '10px'
            }} elevation={8}>
              <IconButton color="primary" aria-label="add to shopping cart" className='won_btn2'>
                <CheckRoundedIcon />
              </IconButton>  
              <div id='Tname'> Team Name </div>
              <div id='Yr'> Year </div>
            </Paper>

          </Grid>
          <Divider orientation="vertical" flexItem color='#fff'>
          </Divider>
          <Grid item xs style={{ marginLeft: 20 }}>
            <Stack direction="row" spacing={2}>
              <Paper style={{
                width: 100, height: 60, backgroundColor: '#2e325c',
                border: '2px solid #3b4285', borderRadius: '30px'
              }} elevation={8}>
                <div className="icon_create">{<img src={Football_i} width='60px' paddingleft='10px' />} </div>
              </Paper>
              <CSSTextField disabled id="sportsName" style={{ width: 240, maxheight: 40 }} label="sports name" variant="outlined" />
              <RedTextField disabled id="entryFee" style={{ width: 120, height: 40 }}
                label="Entry Fee" variant="outlined" />
            </Stack>
            <div style={{width:'530', height:'40vh'}}></div>
            <Paper className="pos_card" style={{
                  width: 500, height: 40, backgroundColor: '#2e325c',
                  border: '2px solid #3b4285', borderRadius: '30px',
                  display:'flex', alignItems: 'center', color:'#fff',
                  fontSize:20, justifyContent:'space-around',
                }} elevation={8}>
                <div id='Tname' style={{flex:'70%'}}> Total: </div>
                <div style={{flex:'10%' , display:'grid', placeItems: 'center'}}><RupeeIcon/></div>
                <div id='Year' style={{ flex:'30%' }}> 36,577 </div>
              </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default FeeRecords