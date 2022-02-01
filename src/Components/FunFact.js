import { Paper, Typography } from "@material-ui/core";
import React from "react";
import "../Styles/funFact.css";

const FunFact = () => {
  let time = 24;

  return (
    <Paper className="funFact" style={{ color: "#333" }}>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "5px" }}
      >
        Did you Know??
      </Typography>
      <Typography>
        My life is pretty simple and straightforward. I code, design and eat all
        day. I have been coding for {time} seconds.
      </Typography>
    </Paper>
  );
};

export default FunFact;
