import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="typewriter-loader">
        <div className="carriage"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
      </div>
    </div>
  );
}
