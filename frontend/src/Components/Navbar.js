import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context-firebase-trash";
import React from "react";
function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [clickState, SetClick] = React.useState(false);
  const handleClick = () => {
    SetClick((prevState) => {
      return !prevState;
    });
  };
  
  return (
    <nav className="NavbarItems">
      <h1 className="logo">DocHelp</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clickState ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clickState ? "nav-menu active" : "nav-menu"}>
        <li>
          <p className="nav-links">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <i className="fa-solid fa-house-user"></i>
              Home
            </Link>
          </p>
        </li>
        <li>
          <p className="nav-links">
            <Link
              to="http://localhost:3000/illsearch"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              Search Engine
            </Link>
          </p>
        </li>
        <li>
          <p className="nav-links">
            <Link
              to="http://localhost:3000/chats"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-solid fa-comments"></i>
              Chat
            </Link>
          </p>
        </li>
        <li>
          <p className="nav-links-mobile">
            <Link
              to="http://localhost:3000/profile"
              style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <img
                src={currentUser.photoURL}
                alt="pfp"
                className="pfp"
                style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
              />
              Profile
            </Link>
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
