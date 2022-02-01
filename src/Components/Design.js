import React from "react";
import "../Styles/designs.css";

const Design = ({ design, description }) => {
  return (
    <div>
      <img src={design} alt={description} />
    </div>
  );
};

export default Design;
