import React from "react";
import Project from "./Project";
import "../Styles/projects.css";
import { Typography } from "@material-ui/core";
import QuizIcon from "../Assets/QuizIcon.jpg";
import text_to_speech from "../Assets/text_to_speech.jpg";
import calculator from "../Assets/calculator.jpg";
import shopping from "../Assets/shopping.jpg";
import TicTacToe from "../Assets/TicTacToe.jpg";
import todo from "../Assets/todo.jpg";
import stickyNotes from "../Assets/stickyNotes.jpg";

const Projects = () => {
  return (
    <div>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#303f9f",

          margin: "90px 0 40px 0",
        }}
      >
        {" PROJECTS COMPLETED"}
      </Typography>

      <Project
        number="01 - Nubs Quiz Platform"
        image={QuizIcon}
        description="This web app is a virtual quiz platform where people get to test their 
        knowledge on the Bible. It was built for my campus denomination during the pandemic. 
        I built it with vanilla javascript. No framework and library"
      />
      <Project
        number="02 - Text to Speech App"
        image={text_to_speech}
        description="This amazing web app can read texts out loud. For those of us who do not like to read, 
        this app is here to solve our problems. Pitch can be adjusted to get really fancy voices. 
        The best part, it can ready emojis too 😃👌"
      />
      <Project
        number="03 - Todo List App"
        image={todo}
        description="This keeps track of all of your todos in a day. You can as well add the time you'd like to do the activity.
    Basically, it helps us to stay organized and prioritize our activities for the day."
      />
      <Project
        number="04 - Smart Calculator"
        image={calculator}
        description="Unlike other calculators you find online, this one take can turned off. It has a section to display the brains behind it. Pretty fancy yeah?? It essentially 
        does basic arithmetic calculations. I built it with my colleague developer, Derrick Opoku. "
      />
      <Project
        number="05 - Tic Tac Toe Game"
        image={TicTacToe}
        description="This is a game meant for two users. Any user who is able to arrange their cards in an orderly manner wins the game.
        Cards can be arranged vertically, horizontally, or diagonally.s"
      />
      <Project
        number="06 - Shopping Expenses Tracker"
        image={shopping}
        description="This keeps track of all of your shopping expenses and does the totalling of the price.
         You can check off bought items, delete items and the price will automatically update itself. It comes in handy when shopping, you don't have to memorize what you need to buy."
      />
      <Project
        number="07 - Sticky Notes"
        image={stickyNotes}
        description="Quickly pin a note on the web with this. You can edit it as well after you save.
        It comes in handy when you need to remind yourself of the 'whys' of achieving something. It can
        simply be deleted once the goal is achieved"
      />
    </div>
  );
};

export default Projects;
