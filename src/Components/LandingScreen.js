import { Box, Button, Typography } from "@material-ui/core";
import "../Styles/landingScreen.css";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Facebook, Twitter, LinkedIn, WhatsApp } from "@material-ui/icons";
import { Spring } from "react-spring";
import SamRobert from "../Assets/SamRobert.png";

const LandingScreen = () => {
  const { text } = useTypewriter({
    words: [
      "Front-End Developer",
      "UI/UX Designer",
      "Graphic Designer",
      "Video Editor",
      "2D&3D Animater",
    ],
    loop: 0,
  });

  return (
    <div className="landingScreen">
      <div className="my_bio">
        <Box mt={4}>
          <Typography variant="h4">
            I'm <b style={{ color: "#333" }}>Robert Sam.</b>
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            I am a
            <span style={{ color: "#C51162", fontWeight: "bold" }}>
              {" "}
              {text}.
            </span>
          </Typography>
          <Box marginY={4}>
            {/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}> */}
            {(props) => (
              <div style={props}>
                <Typography
                  style={{
                    lineHeight: "1.75em",
                    marginTop: 30,
                    fontSize: 18,
                  }}
                >
                  Hi, I'm Sam, a Frontend Developer (ReactJs), Graphic and UI/UX
                  Designer . My job is to select, design and test the user
                  interface elements of a website, focusing on the look and feel
                  of the site, along with UX and its functionality.
                </Typography>
              </div>
            )}
            {/* </Spring> */}
          </Box>
          <Box mt={4}>
            <Button
              style={{ marginRight: 5 }}
              variant="contained"
              color="primary"
            >
              Hire Me
            </Button>
            <Button variant="outlined" color="primary">
              Download CV
            </Button>
          </Box>
          <Box mt={4}>
            <Facebook style={{ marginRight: 15 }} color="primary" />
            <WhatsApp style={{ marginRight: 15 }} color="primary" />
            <Twitter style={{ marginRight: 15 }} color="primary" />
            <LinkedIn color="primary" />
          </Box>
        </Box>
      </div>
      {/* <div className="my_logo"> */}
      <div className="logo_container">
        <img src={SamRobert} alt="Robert" className="my_picture" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default LandingScreen;
