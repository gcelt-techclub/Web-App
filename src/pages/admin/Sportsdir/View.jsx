import React, { useEffect, useState } from "react";
import { styled, Button } from "@mui/material";
import "../../../App.css";
import Sportscomponent from "./Component.jsx";
import { getSports } from "../../../API/sports";
import { query, limit, where } from "@firebase/firestore";

import { sportsRef } from "../../../firebase_config";
import { useLocation } from "react-router";

const ColorButton = styled(Button)(({}) => ({
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

function View() {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const q = query(
    sportsRef,
    where("name", "==", `${location.pathname.split("/").pop()}`),
    limit(1)
  );

  useEffect(() => {
    getSports(q).then((d) => {
      setData(d);
      setIsLoading(false);
  });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
      <Sportscomponent isEditable={false} isNameEditable={false} data={data[0]} />
  );
}

export default View;
