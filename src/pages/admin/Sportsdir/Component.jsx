import React, { useState, useEffect } from "react";
import { Stack, Paper, styled, TextField, Grid, Button } from "@mui/material";
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Sports_Icon_List } from "./Sports_Icon_List";
import Football_i from "../../../assets/icons/football2.png";
import "../../../App.css";

import { createSport, updateSport } from "../../../API/sports";

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

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2e325c",
  border: "2px solid #3b4285",
  borderRadius: "20px",
  fontSize: 20,
  "&:hover": {
    backgroundColor: "#5442CC",
  },
  "&:active": {
    backgroundColor: "#5442CC",
  },
}));

const CSSTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      style: {
        fontSize: 20,
        backgroundColor: "#2e325c",
        border: "2px solid #3b4285",
        borderRadius: "10px",
        color: "#fff",
      },
    }}
    InputLabelProps={{ style: { fontSize: 20, color: "#fff" } }}
    {...props}
  />
))(() => ({}));

const RedTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      style: {
        fontSize: 20,
        backgroundColor: "#F75555",
        border: "2px solid #F75555",
        borderRadius: "30px",
        color: "#fff",
        padding: 1,
      },
    }}
    InputLabelProps={{ style: { fontSize: 20, color: "#fff" } }}
    {...props}
  />
))(() => ({}));

function Component({ isEditable, isNameEditable, data }) {

  const [formData, setFormData] = useState(data);


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData, ' is for submission')
    const res = isNameEditable === true ? await createSport(formData) : await updateSport(formData);
    console.log(res);

    e.reset();
  };


 
  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <FormControl style={{ width: 120, maxheight: 20, backgroundColor: '#2e325c', border: '2px solid #3b4285', borderRadius: '10px', color: '#fff', }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.image_name}
            label="Age"
            onChange={(e) => {setFormData((prev) => ({ ...prev, ["image_name"]: e.target.value }))}}

            disabled={!isEditable}
          >
            {Sports_Icon_List.map((item, index) => (
              <MenuItem key={index} value={item.title} >
                <ListItemText primary={item.icon} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CSSTextField
          disabled={!isNameEditable}
          id="sportsName"
          style={{ width: 400, maxheight: 40 }}
          label="sports name"
          variant="outlined"
          name="sports_name"

          onChange={(e) => {
            setFormData((prev) => ({ ...prev, ["name"]: e.target.value }))
          }}

          value={formData["name"]}
        />
        <CSSTextField
          disabled={!isEditable}
          id="teamSize"
          style={{ width: 170, maxheight: 40 }}
          label="Team Size"
          variant="outlined"

          onChange={(e) => {
            setFormData((prev) => ({ ...prev, ["team_size"]: e.target.value }))
          }}

          value={formData.team_size}

        />
        <CSSTextField
          disabled={!isEditable}
          id="Substitute"
          style={{ width: 170, maxheight: 40 }}
          label="Substitute"
          variant="outlined"

          onChange={(e) => {
            setFormData((prev) => ({ ...prev, ["substitute"]: e.target.value }))
          }}

          value={formData.substitute}
        />
        <RedTextField
          disabled={!isEditable}
          id="entryFee"
          style={{ width: 120, height: 40 }}
          label="Entry Fee"
          variant="outlined"

          onChange={(e) => {
            setFormData((prev) => ({ ...prev, ["entry_fee"]: e.target.value }))
          }}

          value={formData.entry_fee}
        />
      </Stack>
      <Grid className="grid_margin" container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={7.5}>
          <h3>Rules and Guidelines</h3>
        </Grid>
        <Grid item xs={4}>
          <h3>Field View</h3>
        </Grid>
      </Grid>
      <Stack>
        <CSSTextField
          disabled={!isEditable}
          id="Rules"
          style={{ width: 650, height: 340 }}
          multiline
          rows={10}
          maxRows={10}
          label="Rules"
          variant="outlined"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, ["rules"]: e.target.value }))
          }}

          value={formData.rules}
        />
      </Stack>

      {
        isEditable && <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid item xs={7.5} />
          <Grid item xs={4}>
            <Stack
              id="bottom_btn"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Stack direction="row" spacing={2}>
                <ColorButton variant="contained" size="large" type="submit">
                  Save
                </ColorButton>
                <ColorButton variant="contained" size="large" >
                  Cancel
                </ColorButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      }
    </form>
  );
}

export default Component;
