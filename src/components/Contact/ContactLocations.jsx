import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactLocations.scss";
function ContactLocations() {
  return (
    <div className="ContactLocations">
      <div className="mycontainer">
        <div className="wrapper">
          <div className="col phone">
            <FontAwesomeIcon icon={faMobileAlt} />
            <h1>Telefon</h1>
            <p>
              Admin <a href="tel: +998 90 999 99 99">+998 90 806 20 04</a>
            </p>
            <p>
              Admin <a href="tel: +998 90 999 99 99">+998 90 806 20 04</a>
            </p>
          </div>
          <div className="col locations">
            <FontAwesomeIcon icon={faLocationDot} />
            <h1>Manzil</h1>
            <p>Toshkent shahri, Uchtepa tumani, Lutfiy ko'cha 14</p>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faEnvelope} />
            <h1>E-mail</h1>
            <p>softcity2022@gmail.com</p>
            <p>softcity2022@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLocations;
