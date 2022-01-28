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

const Services = () => {
  return (
    <div className="services">
      <div>
        <h3 style={{ color: "#333" }}>My Amazing Services</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
        aspernatur maxime velit ratione porro corrupti numquam provident
        delectus et officiis. Voluptatibus quis atque mollitia tempore maiores
        ut veritatis libero suscipit?
      </div>
      <div className="service_container">
        {/* {serviceInfo.map(({ service }) => (
          <Service icon={service.icon} title={service.description} />
        ))} */}
        <Service
          icon={<DeveloperMode style={{ fontSize: 60 }} />}
          title="Web development"
          service="Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Veniam aspernatur maxime velit ratione porro corrupti numquam provident delectus et officiis. Voluptatibus quis atque
       mollitia tempore maiores ut veritatis libero suscipit?"
        />
        <Service
          icon={<Laptop style={{ fontSize: 60 }} />}
          title="UI/UX Design"
          service="Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Veniam aspernatur maxime velit ratione porro corrupti numquam provident delectus et officiis. Voluptatibus quis atque
       mollitia tempore maiores ut veritatis libero suscipit?"
        />
        <Service
          icon={<DesignServices style={{ fontSize: 70 }} />}
          title="Graphic Design "
          service="Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Veniam aspernatur maxime velit ratione porro corrupti numquam provident delectus et officiis. Voluptatibus quis atque
       mollitia tempore maiores ut veritatis libero suscipit?"
        />
        <Service
          icon={<Psychology style={{ fontSize: 80 }} />}
          title="2D and 3D Animation"
          service="Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Veniam aspernatur maxime velit ratione porro corrupti numquam provident delectus et officiis. Voluptatibus quis atque
       mollitia tempore maiores ut veritatis libero suscipit?"
        />
        <Service
          icon={<VideoSettingsOutlined style={{ fontSize: 70 }} />}
          title="Video Editing"
          service="Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Veniam aspernatur maxime velit ratione porro corrupti numquam provident delectus et officiis. Voluptatibus quis atque
       mollitia tempore maiores ut veritatis libero suscipit?"
        />
        <Service
          icon={<AppSettingsAlt style={{ fontSize: 70 }} />}
          title="Mobile App Development"
          service="Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Veniam aspernatur maxime velit ratione porro corrupti numquam provident delectus et officiis. Voluptatibus quis atque
       mollitia tempore maiores ut veritatis libero suscipit?"
        />
      </div>
    </div>
  );
};

export default Services;
