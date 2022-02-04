import { Box, Typography } from "@mui/material";
import React from "react";
import Design from "./Design";
import DIPFlier from "../Assets/DIPFlier.png";
import Badasu from "../Assets/Badasu.jpg";
import EP from "../Assets/EP.jpg";
import Cilla from "../Assets/Cilla.jpg";
import RevNat from "../Assets/RevNat.jpg";
import Nath from "../Assets/Nath.jpg";
import FelizNavidad from "../Assets/FelizNavidad.png";

// import Marketplace from "../Assets/Marketplace.xd";
const Designs = () => {
  return (
    <Box margin={4}>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Monsterrat",
          fontWeight: "bolder",
          color: "#333",
        }}
      >
        DESIGNS
      </Typography>
      <Box mt={4} className="designContainer">
        <Design design={DIPFlier} description={"DIP Flier"} />
        <Design design={RevNat} description={"Rev Nat"} />
        <Design design={EP} description={"EP Church"} />
        <Design design={Cilla} description={"Cilla"} />
        <Design design={Badasu} descripti on={"Badasu"} />
        <Design design={Nath} description={"Nath"} />
        <Design design={FelizNavidad} description={"Christmas Flyer"} />
      </Box>
    </Box>
  );
};

export default Designs;
