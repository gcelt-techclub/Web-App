import React, { useState, useEffect } from 'react'
import { Stack, styled, Grid, Button, theme } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import "../../../App.css"
import Teamcomponent from "./component.jsx"

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
    const theme = useTheme();
    return (
        <div>
            <Teamcomponent/>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={7.5} />
                <Grid item xs={4}>
                    <Stack id="bottom_btn" style={{ display: 'flex', justifyContent: 'end' }}>

                        <Stack direction="row" spacing={2}>
                            <ColorButton variant="contained" size="large" > Save  </ColorButton>
                            <ColorButton variant="contained" size="large">Cancel</ColorButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default Edit