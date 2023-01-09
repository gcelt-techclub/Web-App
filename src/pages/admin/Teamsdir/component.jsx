import React, { useState, useEffect } from 'react'
import { Stack, styled, TextField,} from '@mui/material'
import Sportsbar from "../../../components/SportsNavbar.jsx";
import "../../../App.css"

import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT + ITEM_PADDING_TOP,
            width: 250,
            backgroundColor: '#2e325c',
            border: '2px solid #3b4285',
            borderRadius: '10px',
            color: '#fff',
        },
    },
};

const playerItem = [
    {
        pl: 'Player1',
    },
    {
        pl: 'Player2',
    },
    {
        pl: 'Player3',
    },
    {
        pl: 'Player4',
    },
    {
        pl: 'Player5',
    },
    {
        pl: 'Player6',
    },
    {
        pl: 'Player7',
    },
    {
        pl: 'Player8',
    },
    {
        pl: 'Player9',
    },
    {
        pl: 'Player10',
    },
]
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const CSSTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true, style: { fontSize: 20, backgroundColor: '#2e325c', border: '2px solid #3b4285', borderRadius: '10px', color: '#fff', } }}
        InputLabelProps={{ style: { fontSize: 20, color: '#fff' } }} {...props} />
))(() => ({}));


function Component() {
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const { target: { value }, } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div><Sportsbar />
            <form>
                <Stack direction="row" spacing={2}>
                    <CSSTextField id="sportsName" style={{ width: 400, maxheight: 40 }} label="Team Name" variant="outlined" />
                    <FormControl style={{ width: 400, maxheight: 40, backgroundColor: '#2e325c', border: '2px solid #3b4285', borderRadius: '10px', color: '#fff', }}>
                        <InputLabel id="demo-simple-select-label" style={{ fontSize: 20, color: '#fff' }}>Team Captain</InputLabel>
                        <Select
                            labelId="demo-simple-select-label" id="demo-simple-select"
                            value={personName} label="Team Captain " onChange={handleChange}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (<Chip key={value} label={value} style={{ color: '#fff' }} />))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name} >
                                    <Checkbox checked={personName.indexOf(name) > -1} style={{ color: '#fff' }} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
                <div className='player section' style={{ margin: 10, color:'#fff', fontSize:20}} >Team Players</div>
                <Stack direction="row" style={{ display:'flex' , flexWrap:'wrap' , justifyContent:'space-evenly'}}>
                    {playerItem.map((item, index) => (
                        <FormControl key={index} style={{ margin:'5px 5px 10px 5px', width: 200, maxheight: 40, backgroundColor: '#2e325c', border: '2px solid #3b4285', borderRadius: '10px', color: '#fff', }}>
                            <InputLabel id="demo-simple-select-label" style={{ fontSize: 20, color: '#fff' }}>{item.pl}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label" id="demo-simple-select"
                                value={personName} label={item.pl} onChange={handleChange}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (<Chip key={value} label={value} style={{ color: '#fff' }} />))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name} >
                                        <Checkbox checked={personName.indexOf(name) > -1} style={{ color: '#fff' }} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))}
                </Stack>
            </form>
        </div>
    )
}

export default Component