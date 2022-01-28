import { Typography } from "@material-ui/core";
import React from "react";
import Certification from "./Cerification";

const Certifications = () => {
  return (
    <div>
      <Typography style={{ paddingLeft: 60, textAlign: "center" }} variant="h5">
        Certifications
      </Typography>

      <Certification course="Front-End Engineer" />
      <Certification course="React" />
      <Certification course="Redux" />
      <Certification course="TypeScript" />
      <Certification course="Python 3" />
      <Certification course="Bash Scripting" />
    </div>
  );
};

export default Certifications;
