import React from "react";
import "../style/ContainerStyle.css";

const Container = ({ children }) => {
  return (
    <div id="container" className="sixteen wide column">
      {children}
    </div>
  );
};

export default Container;
