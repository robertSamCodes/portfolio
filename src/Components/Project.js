import { Box, Button, Typography } from "@material-ui/core";
import React from "react";

const Project = ({ number, image, description }) => {
  return (
    <div className="project_container">
      <div className="image_container">
        <img
          src={image}
          style={{ width: "100%", margin: "0 auto" }}
          alt="samRobert"
        />
      </div>
      <div className="description_container">
        <Typography variant="h5" color="grey">
          {number}
        </Typography>
        <Typography style={{ lineHeight: "1.75" }}>{description}</Typography>
        <br />
        <Box mt={2}>
          <Button variant="contained" color="primary">
            View
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Project;
