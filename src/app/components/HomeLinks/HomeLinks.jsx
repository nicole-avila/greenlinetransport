"use client";
import "../Navbar/Navbar.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HomeLinks({ showLinks, setShowLinks }) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <>
      <div>
        <Link href="/#">
          <Image
            className="navbar_logo"
            src="/images/whiteLogoXs.svg"
            alt="Logo"
            width={110}
            height={50}
            priority
          />
        </Link>
      </div>
      <div className={`navbar_links ${showLinks ? "active" : ""}`}>
        <li className="navbar_link-li">
          <Link
            href="/services"
            className={pathname === "/services" ? "active_route" : ""}
            onClick={handleLinkClick}
          >
            våra tjänster
          </Link>
        </li>
        <li className="navbar_link-li">
          <Link
            href="/#fair-transport"
            className={pathname === "/#fair-transport" ? "active_route" : ""}
            onClick={handleLinkClick}
          >
            fair transport
          </Link>
        </li>
        <li className="navbar_link-li">
          <Link
            href="/om-oss"
            className={pathname === "/om-oss" ? "active_route" : ""}
            onClick={handleLinkClick}
          >
            om oss
          </Link>
        </li>
        <li className="navbar_link-li">
          <Link
            href="/kontakt"
            className={pathname === "/kontakt" ? "active_route" : ""}
            onClick={handleLinkClick}
          >
            kontakt
          </Link>
        </li>
      </div>
    </>
  );
}

export default HomeLinks;
