"use client"; // This component handles client-side rendering

import Image from "next/image";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  return (
    <div className="navbar">
      <div>
        <a href="#">
          <Image
            className="navbar_logo"
            src="/images/whiteLogoXs.svg"
            alt="Logo"
            width="185"
            height="80"
          />
        </a>
      </div>
      <div className={`navbar_links ${showLinks ? "active" : ""}`}>
        <li className="navbar_link-li">våra tjänster</li>
        <li className="navbar_link-li">fair transport</li>
        <li className="navbar_link-li">om oss</li>
        <li className="navbar_link-li">kontakt</li>
      </div>
      <Image
        className="navbar_hamburger"
        src="/images/whiteHamburger.svg"
        alt="Toggle navigation"
        onClick={handleShowLinks}
        width="30"
        height="30"
      />
    </div>
  );
}

export default Navbar;
