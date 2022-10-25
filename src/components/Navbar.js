import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegUser, FaExternalLinkAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleCLick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Adventure
          </Link>
          <div className="menu-icon" onClick={handleCLick}>
            {click ? <FiX /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/missions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Missions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/support"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/places"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Places
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--medium">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
