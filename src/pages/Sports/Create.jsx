import React, { useState, useEffect } from 'react'
import { Stack , Grid, styled, TextField, Paper, makeStyles } from '@mui/material'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#2e325c',
  padding: theme.spacing(1),
  textAlign: 'center',
  border: '2px solid #3b4285', borderRadius: '10px',
  color: '#fff',
}));

function Create() {
  return (
    <form>
      <Grid container rowSpacing={2} columnSpacing={3}>
        <Grid item xs={5}>
          <Item clasName="field" style={{ width: 420, height: 40 }} elevation={8}>
            <TextField id="standard" style={{ width: 100, maxheight: 10 }} label="standard" variant="standard" />
          </Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item clasName="field" style={{ width: 190, height: 40 }} elevation={8}>
            <Stack direction="row" spacing={2}>
              <div>Team Size</div>
              <TextField id="standard" style={{ width: 50, maxheight: 10 }} label="standard" variant="standard"
              inputProps={{style: {fontSize: 25, top:-40}}}  />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item clasName="field" style={{ width: 190, height: 40 }} elevation={8}>
            <TextField id="standard" style={{ width: 100, maxheight: 10 }} label="standard" variant="standard" />
          </Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item style={{ height: 40, borderRadius: '30px', border: '2px solid #F75555', backgroundColor: '#F75555' }}
            elevation={8}>
            <TextField style={{ width: 100, maxheight: 10 }} id="standard-number" label="Number" type="number"
              InputLabelProps={{ shrink: true, }} variant="standard" />
          </Item>
        </Grid>
        <Grid item xs={7.5}>
          <h3>Rules and Guidelines</h3>
        </Grid>
        <Grid item xs={4}>
          <h3>Field View</h3>
        </Grid>
        <Grid item xs={7.5}>
          <Item style={{ width: 650, height: '20rem' }} elevation={8}>
            <TextField id="standard" style={{ width: '100%' }}
              multiline
              rows={13}
              maxRows={13} variant="standard" />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{ width: 200, height: '20rem' }} elevation={8}>xs=8</Item>
        </Grid>
        <Grid item xs={7.5}>
          <></>
        </Grid>
        <Grid item xs={2}>
          <Item style={{ width: 150, height: 30, backgroundColor: '#5442CC' }} elevation={8}>Save</Item>
        </Grid>
        <Grid item xs={2}>
          <Item style={{ width: 150, height: 30 }} elevation={8}>Cancel</Item>
        </Grid>
      </Grid>
    </form>
  )
}

export default Create