import React from "react";
import back from "../../assets/background.mp4";
import "./Main.scss";

function Main() {
  return (
    <div className="Main">
      <div className="wrapper">
        <video src={back} autoPlay loop muted />
      </div>
    </div>
  );
}

export default Main;
