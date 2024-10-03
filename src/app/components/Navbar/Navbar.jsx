"use client";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div>
        <a href="#">
          <img
            className="navbar_logo"
            src="/images/whiteLogoXs.svg"
            alt="Logo"
          />
        </a>
      </div>
      <div className={`navbar_links ${showLinks ? "active" : ""}`}>
        <li className="navbar_link-li">våra tjänster</li>
        <li className="navbar_link-li">fair transport</li>
        <li className="navbar_link-li">om oss</li>
        <li className="navbar_link-li">kontakt</li>
      </div>
      <img
        className="navbar_hamburger"
        src="/images/whiteHamburger.svg"
        alt="Toggle navigation"
        onClick={handleShowLinks}
      />
    </div>
  );
}

export default Navbar;
