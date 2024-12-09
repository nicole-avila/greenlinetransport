"use client";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import useContentful from "@/lib/contentful";

function Footer() {
  const { data, loading, error } = useContentful("footer");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_shortcut">
          <h4>genvägar</h4>
          <Link href="/services" className="footer_shortcut-li">
            våra tjänser
          </Link>
          <Link href="/#fair-transport" className="footer_shortcut-li">
            fair transport
          </Link>
          <Link href="/om-oss" className="footer_shortcut-li">
            om oss
          </Link>
          <Link href="/kontakt" className="footer_shortcut-li">
            kontakt
          </Link>
        </div>

        <div className="footer-info">
          <div className="footer-find-us">
            <h4>hitta oss</h4>
            <p>{data.streetAddress}</p>
            <p>{data.postalcode}</p>
            <p>{data.city}</p>
          </div>
          <br />
          <div className="footer-contact">
            <h4>kontakt</h4>
            <p>{data.phoneNumber}</p>
            <p>{data.mobileNumber}</p>
            <p className="footer-email">{data.email}</p>
          </div>
        </div>

        <div className="footer_media">
          <h4>sociala medier</h4>
          <div className="footer_icon">
            <Image
              className="footer_icon-link"
              src="/images/instagram.svg"
              alt=""
              width={30}
              height={30}
            />
            {/* <Image
              className="footer_icon-link"
              src="/images/linkedIn.svg"
              alt=""
              width={30}
              height={30}
            /> */}
          </div>
        </div>
        <div className="footer_svg-bg"></div>
      </div>
    </div>
  );
}

export default Footer;
