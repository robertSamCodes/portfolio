import { Facebook, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  const social_media_icons = { marginRight: 15, cursor: "pointer" };
  return (
    <div className="footer_container">
      <Box>
        <Typography> 055 3359 848/ 020 0022 942</Typography>
        <Typography> PO Box 644. Obuasi - Ghana</Typography>
        <Typography> robertksam2000@gmail.com</Typography>

        <Facebook style={social_media_icons} />
        <WhatsApp style={social_media_icons} />
        <Twitter style={social_media_icons} />
        <LinkedIn style={social_media_icons} />
      </Box>
      <Box>
        <Typography>View Github Profile</Typography>
        <Typography>#AppDev # WebDev</Typography>
        <Typography>#Design # VideoEditor</Typography>
        <Typography>#Media # Animation</Typography>
        <Typography></Typography>
      </Box>
    </div>
  );
};

export default Footer;
