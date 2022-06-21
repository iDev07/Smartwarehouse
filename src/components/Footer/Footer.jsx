import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import operator from "../../assets/f_operator.png";
import location from "../../assets/f_location.png";
import mail from "../../assets/f_mail.png";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="Footer">
      <div className="mycontainer">
        <div className="main_wrapper">
          <div className="col">
            <div className="main_infos">
              <div className="operator">
                <div className="wrapper">
                  <div className="icon">
                    <img src={operator} alt="operator" />
                  </div>
                  <div className="text">
                    <h3>Operator bilan bog'lanish</h3>
                    <p>+998 90 806 20 04</p>
                  </div>
                </div>
              </div>
              <div className="location">
                <div className="wrapper">
                  <div className="icon">
                    <img src={location} alt="Email-icon" />
                  </div>
                  <div className="text">
                    <h3>Joylashuv</h3>
                    <p>Toshkent shahar, Uchtepa tumani 14, 2, 14</p>
                  </div>
                </div>
              </div>
              <div className="email">
                <div className="wrapper">
                  <div className="icon">
                    <img src={mail} alt="mail" />
                  </div>
                  <div className="text">
                    <h3>E-mail</h3>
                    <p>developerdiyorbek@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="quick_links">
              <ul>
                <li>
                  <Link to="/">Asosiy</Link>
                </li>
                <li>
                  <Link to="/chances">Imkoniytalar</Link>
                </li>
                <li>
                  <Link to="/comments">Sharhlar</Link>
                </li>
                <li>
                  <Link to="/news">Yangiliklar</Link>
                </li>
                <li>
                  <Link to="/contact">Aloqa</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="socials">
              <div className="top">
                <ul>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <b>
                Barcha huquqlar himoyalangan.{" "}
                <a href="https://softcity.uz">SOFTCITY</a>{" "}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
