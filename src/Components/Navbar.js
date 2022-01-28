import "../Styles/appHeader.css";

import React from "react";
import { Button, Typography } from "@material-ui/core";

const AppHeader = () => {
  return (
    <div className="appHeader">
      <Typography style={{ fontWeight: "bold" }}>Logo</Typography>
      <Typography style={{ fontWeight: "bold" }}>About</Typography>
      <Typography style={{ fontWeight: "bold" }}>Hire Me</Typography>
      <Button variant="contained" size="small" color="primary">
        Contact
      </Button>
    </div>
  );
};

export default AppHeader;
