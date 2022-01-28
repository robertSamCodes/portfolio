import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import web_dev from "../Assets/web_dev.svg";

const Service = ({ title, service, icon }) => {
  return (
    <Paper className="service">
      {/* <img className="icon_here" src={icon} alt={"service"} /> */}
      <div className="icon_here">{icon}</div>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          paddingLeft: 10,
          textAlign: "left",
          marginBottom: 10,
        }}
      >
        {title}
      </Typography>
      <Typography style={{ lineHeight: "1.75em", margin: 10 }}>
        {service}
      </Typography>
      <Button
        size="small"
        style={{ margin: 10 }}
        variant="contained"
        color="primary"
      >
        Learn more
      </Button>
    </Paper>
  );
};

export default Service;
