import React from "react";
import "./MobileApp.scss";
import app_img from "../../assets/mobile.png";
function MobileApp() {
  return (
    <div className="MobileApp">
      <div className="myappcontainer">
        <div className="wrapper">
          <div className="leftbox">
            <div className="app_title">
              <h1>SMART WAREHOUSE Mobile</h1>
            </div>
            <div className="app_features">
              <ul>
                <li>
                  Online opening of deposites control of savings and savings,
                  accured overtime
                </li>
                <li>
                  Online opening of deposites control of savings and savings,
                  accured ove
                </li>
                <li>
                  Online opening of deposites control of savings and savings
                </li>
                <li>Online opening of deposites control of savings and savi</li>
                <li>Online opening of deposites control of savings and </li>
                <li>Online opening of deposites control of savings </li>
                <li>Online opening of deposites control of </li>
              </ul>
            </div>
            <div className="download_app">{/* <a href="#"></a> */}</div>
          </div>
          <div className="rightbox">
            <div className="wrapper">
              <img src={app_img} alt="app_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
