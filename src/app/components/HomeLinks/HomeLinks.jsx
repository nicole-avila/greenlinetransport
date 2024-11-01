"use client";
import "../Navbar/Navbar.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HomeLinks({ showLinks }) {
  const pathname = usePathname();

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
          >
            våra tjänster
          </Link>
        </li>
        <li className="navbar_link-li">
          {" "}
          <Link
            href="/fair-transport"
            className={pathname === "/fair-transport" ? "active_route" : ""}
          >
            fair transport
          </Link>
        </li>
        <li className="navbar_link-li">
          {" "}
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active_route" : ""}
          >
            om oss
          </Link>
        </li>
        <li className="navbar_link-li">
          <Link
            href="/kontakt"
            className={pathname === "/kontakt" ? "active_route" : ""}
          >
            kontakt
          </Link>
        </li>
      </div>
    </>
  );
}

export default HomeLinks;
