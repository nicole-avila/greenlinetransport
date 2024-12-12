"use client";
import "../Navbar/Navbar.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useContentful from "@/lib/contentful";

function HomeLinks({ showLinks, setShowLinks }) {
  const pathname = usePathname();
  const { data, loading, error } = useContentful("logga");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <>
      <div>
        <Link href="/#">
          <Image
            src={`https:${data.logo.fields.file.url}`}
            alt="logo"
            width={105}
            height={90}
            priority
            className="navbar_logo"
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
