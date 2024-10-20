"use client"; // This component handles client-side rendering

import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  return (
    <div className="navbar">
      <div>
        <Link href="#">
          <Image
            className="navbar_logo"
            src="/images/whiteLogoXs.svg"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
        </Link>
      </div>
      <div className={`navbar_links ${showLinks ? "active" : ""}`}>
        <Link href="/services" className="navbar_link-li">
          våra tjänser
        </Link>
        <Link href="/services" className="navbar_link-li">
          fair transport
        </Link>
        <Link href="/services" className="navbar_link-li">
          om oss
        </Link>
        <Link href="/services" className="navbar_link-li">
          kontakt
        </Link>
      </div>
      <Image
        className="navbar_hamburger"
        src="/images/whiteHamburger.svg"
        alt="Toggle navigation"
        onClick={handleShowLinks}
        width={25}
        height={25}
      />
    </div>
  );
}

export default Navbar;
