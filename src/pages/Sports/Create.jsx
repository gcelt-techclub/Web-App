import React, { useState, useEffect } from 'react'
import { Stack, InputAdornment, styled, TextField, Grid, Button } from '@mui/material'
import { purple } from '@mui/material/colors';

const CSSTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true, style: { fontSize: 20, backgroundColor: '#2e325c', border: '2px solid #3b4285', borderRadius: '10px', color: '#fff', } }}
    InputLabelProps={{ style: { fontSize: 20, color: '#fff' } }} {...props} />
))(() => ({}));

const RedTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true, style: { fontSize: 20, backgroundColor: '#F75555', border: '2px solid #F75555', borderRadius: '30px', color: '#fff', padding: 1, } }}
    InputLabelProps={{ style: { fontSize: 20, color: '#fff' } }} {...props} />
))(() => ({}));


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
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
    <form>
      <Stack direction="row" Spacing={5}>
        <CSSTextField id="sportsName" style={{ width: 500, maxheight: 40 }} label="sports name" variant="outlined" />
        <CSSTextField id="teamSize" style={{ width: 170, maxheight: 40 }} label="Team Size" variant="outlined" />
        <CSSTextField id="Substitute" style={{ width: 170, maxheight: 40 }} label="Substitute" variant="outlined" />
        <RedTextField id="entryFee" style={{ width: 120, height: 40 }}
          label="Entry Fee" variant="outlined" />
      </Stack>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={7.5}>
          <h3>Rules and Guidelines</h3>
        </Grid>
        <Grid item xs={4}>
          <h3>Field View</h3>
        </Grid>
      </Grid>
      <Stack>
        <Stack>
          <CSSTextField id="Rules" style={{ width: 650, height: 200 }}
            multiline
            rows={11}
            maxRows={11}
            label="Rules"
            variant="outlined" />
        </Stack>
        <Stack direction="row" Spacing="5px">
          <ColorButton variant="contained" size="large" >Save</ColorButton>
          <ColorButton variant="contained" size="large">Cancel</ColorButton>
        </Stack>
      </Stack>
    </form>
  )
}

export default Create