import { Box, Typography } from "@mui/material";
import React from "react";
import Design from "./Design";
import DIPFlier from "../Assets/DIPFlier.png";
import shopping from "../Assets/shopping.jpg";
import QuizIcon from "../Assets/QuizIcon.jpg";
import Cilla from "../Assets/Cilla.jpg";
import RevNat from "../Assets/RevNat.jpg";
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
        <Design design={Cilla} description={"Cilla"} />
      </Box>
    </Box>
  );
};

export default Designs;
