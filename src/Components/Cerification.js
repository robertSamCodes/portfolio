import { Paper, Typography } from "@material-ui/core";
import React from "react";
import "../Styles/certificates.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Certification = ({ course, license }) => {
  return (
    <div className="certification_container">
      {/* <Typography variant="h5">Certifications</Typography> */}
      <Paper className="certificate">
        <Typography style={{ fontWeight: "bold" }}>{course}</Typography>
        <Typography>
          <EmojiEventsIcon
            style={{ fontSize: 40, color: "#303f9f", alignItems: "center" }}
          />
        </Typography>
        <Typography style={{ opacity: 0.5, marginTop: -20 }}>
          {license || "Codecademy"}
        </Typography>
      </Paper>
    </div>
  );
};

export default Certification;
