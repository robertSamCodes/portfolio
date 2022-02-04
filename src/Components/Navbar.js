import "../Styles/appHeader.css";

import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="appHeader">
      <Button
        href="/"
        style={{ fontWeight: "bold", cursor: "pointer", color: "#303f9f" }}
      >
        Home
      </Button>
      <Button
        href="/designs"
        style={{ fontWeight: "bold", cursor: "pointer", color: "#303f9f" }}
      >
        Designs
      </Button>
      <Button
        variant="text"
        href="hire"
        style={{ fontWeight: "bold", cursor: "pointer", color: "#303f9f" }}
      >
        Hire Me
      </Button>
      <Button
        href="tel:+233553359848"
        variant="contained"
        size="small"
        color="primary"
      >
        Call Now
      </Button>
    </div>
  );
};

export default AppHeader;
