import React, { useState, useEffect } from "react";
import { Stack, Paper, styled, TextField, Grid, Button } from "@mui/material";
import Football_i from "../../../assets/icons/football2.png";
import "../../../App.css";

import { createSport, updateSport } from "../../../API/sports";

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

function Component({ isEditable,isNameEditable,data }) {

  const [formData,setFormData] = useState(data);



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
        <Paper
          style={{
            width: 100,
            height: 60,
            backgroundColor: "#2e325c",
            border: "2px solid #3b4285",
            borderRadius: "30px",
          }}
          elevation={8}
        >
          <div className="icon_create">
            {<img src={Football_i} width="60px" paddingleft="10px" />}{" "}
          </div>
        </Paper>
        <CSSTextField
          disabled={!isNameEditable}
          id="sportsName"
          style={{ width: 400, maxheight: 40 }}
          label="sports name"
          variant="outlined"
          name = "sports_name"
          
          // inputProps = {{value : formData["name"]}}
          onChange = {(e) => {
            setFormData((prev) => ({...prev,["name"] : e.target.value}))
          }}

          value={formData["name"]}
        />
        <CSSTextField
          disabled={!isEditable}
          id="teamSize"
          style={{ width: 170, maxheight: 40 }}
          label="Team Size"
          variant="outlined"

          onChange = {(e) => {
            setFormData((prev) => ({...prev,["team_size"] : e.target.value}))
          }}

          value={formData.team_size}

        />
        <CSSTextField
          disabled={!isEditable}
          id="Substitute"
          style={{ width: 170, maxheight: 40 }}
          label="Substitute"
          variant="outlined"

          onChange = {(e) => {
            setFormData((prev) => ({...prev,["substitute"] : e.target.value}))
          }}

          value = {formData.substitute}
        />
        <RedTextField
          disabled={!isEditable}
          id="entryFee"
          style={{ width: 120, height: 40 }}
          label="Entry Fee"
          variant="outlined"

          onChange = {(e) => {
            setFormData((prev) => ({...prev,["entry_fee"] : e.target.value}))
          }}

          value = {formData.entry_fee}
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
          onChange = {(e) => {
            setFormData((prev) => ({...prev,["rules"] : e.target.value}))
          }}

          value = {formData.rules}
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
