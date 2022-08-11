import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="wrapper">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      <p className="loader-text">Loading ...</p>
    </div>
  );
};

export default Loader;
