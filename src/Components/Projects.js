import React from "react";
import Project from "./Project";
import "../Styles/projects.css";
import { Typography } from "@material-ui/core";
import QuizIcon from "../Assets/QuizIcon.jpg";
import text_to_speech from "../Assets/text_to_speech.jpg";
import calculator from "../Assets/calculator.jpg";
import shopping from "../Assets/shopping.jpg";

const Projects = () => {
  return (
    <div>
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", textAlign: "center", color: "#333" }}
      >
        {" PROJECTS COMPLETED"}
      </Typography>

      <Project
        number="01 - Nubs Quiz Platform"
        image={QuizIcon}
        description="Lorem ipsum is just a dummy text should we bake the pipe in the 
        gutter for the implementation of all the nations for the benefits of the 
        inclusion in the this is the air I breathe in the garden of the beautiful humans."
      />
      <Project
        number="02 - Text to Speech App"
        image={text_to_speech}
        description="Lorem ipsum is just a dummy text should we bake the pipe in the 
        gutter for the implementation of all the nations for the benefits of the 
        inclusion in the this is the air I breathe in the garden of the beautiful humans."
      />
      <Project
        number="03 - Smart Calculator"
        image={calculator}
        description="Lorem ipsum is just a dummy text should we bake the pipe in the 
        gutter for the implementation of all the nations for the benefits of the 
        inclusion in the this is the air I breathe in the garden of the beautiful humans."
      />
      <Project
        number="03 - Shopping Expenses Tracker"
        image={shopping}
        description="Lorem ipsum is just a dummy text should we bake the pipe in the 
        gutter for the implementation of all the nations for the benefits of the 
        inclusion in the this is the air I breathe in the garden of the beautiful humans."
      />
    </div>
  );
};

export default Projects;
