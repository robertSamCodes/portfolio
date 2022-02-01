import React from "react";
import Service from "./Service";
import "../Styles/services.css";
// import { serviceInfo } from "./ServiceInfo";
import web_dev from "../Assets/web_dev.svg";
import { DeveloperMode, Laptop } from "@material-ui/icons";
import {
  AppSettingsAlt,
  DesignServices,
  Psychology,
  VideoSettings,
  VideoSettingsOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const Services = () => {
  return (
    <div className="services">
      <div>
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#303f9f",
            margin: "60px 0 20px 0",
          }}
        >
          {" MY AMAZING SERVICES"}
        </Typography>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            lineHeight: "1.75em",
            margin: "0 auto",
            fontSize: "18px",
          }}
        >
          I provide cutting-edge solutions to my clients' problems using modern
          and advanced softwares (After Effects, Premiere Pro, Revit
          Architecture, etc). From Web development to design to media, I got you
          covered.
        </Typography>
      </div>
      <div className="service_container">
        {/* {serviceInfo.map(({ service }) => (
          <Service icon={service.icon} title={service.description} />
        ))} */}
        <Service
          icon={<DeveloperMode style={{ fontSize: 60 }} />}
          title="Web development"
          service="I build large and scalable web applications
           with ReactJs and Redux, solving real world problems. While building the amazing web
           app's look and feel, I consider the user's experience as the focal point."
        />
        <Service
          icon={<Laptop style={{ fontSize: 60 }} />}
          title="UI/UX Design"
          service="You don't wanna visit a website with awful design again. There
          is no two-ways about this. That is why you need a professional designer like me. I put
          imagination and ideas into amazing designs, communicating the idea to the outside world. 
          "
        />
        <Service
          icon={<DesignServices style={{ fontSize: 70 }} />}
          title="Graphic Design "
          service="I produce visual content to convey messages by utilizing
           typography and graphics to fulfill users' demands. I focus 
           on the logic of showing items in interactive designs to optimize the 
           user experience by employing visual hierarchy and page layout approaches."
        />
        <Service
          icon={<Psychology style={{ fontSize: 80 }} />}
          title="2D and 3D Animation"
          service=" I'm into all kinds of animation. For all of your advertisements, animation related works 
             , I would be extremely grateful to help out. I represent real life objects with 3D animated objects, 
             communicating ideas to everyone."
        />
        <Service
          icon={<VideoSettingsOutlined style={{ fontSize: 70 }} />}
          title="Video Editing"
          service="Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Veniam aspernatur maxime velit ratione porro corrupti numquam provident delectus 
        et officiis. Voluptatibus quis atque
       mollitia tempore maiores ut veritatis libero suscipit?"
        />
        <Service
          icon={<AppSettingsAlt style={{ fontSize: 70 }} />}
          title="Mobile App Development"
          service="As at the time of crating this portfolio (Jan 2022), I was just about to get started
           with Mobile App Development with React Native. With my proficiency in React, I believe I will
            get a hang of React native in a matter of monts. "
        />
      </div>
    </div>
  );
};

export default Services;
