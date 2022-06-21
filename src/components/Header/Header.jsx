import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Header.scss";
function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <div className="Header">
      <div className="mycontainer">
        <div className="wrapper">
          <div className="leftbox">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="rightbox">
            <ul>
              <li className="home_link">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Asosiy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chances"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Imkoniyatlar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comments"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Sharhlar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Yangiliklar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Aloqa
                </NavLink>
              </li>
              <li>
                <NavLink to="/sign-in">Ro'yxatdan o'tish</NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
                  Kirish
                </NavLink>
              </li>
              <li className="change_lang">
                <select>
                  <option value="uz">UZ</option>
                  <option value="uz">RU</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
