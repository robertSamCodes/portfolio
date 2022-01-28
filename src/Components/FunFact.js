import { Paper, Typography } from "@material-ui/core";
import React from "react";
import "../Styles/funFact.css";

const FunFact = () => {
  return (
    <Paper className="funFact">
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "5px", color: "#333" }}
      >
        Did you Know??
      </Typography>
      <Typography>
        This is the air I breathe in the garden of bla bla bla bla whatever has
        to be heard needs to be said bla bla bla bla black sheep
      </Typography>
    </Paper>
  );
};

export default FunFact;
