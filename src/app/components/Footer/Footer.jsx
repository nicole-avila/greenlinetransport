"use client";
import "./Footer.css";
import { useState, useEffect } from "react";
import client from "@/lib/contentful";

function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await client.getEntries({
          content_type: "footer",
        });

        if (response.items.length > 0) {
          setFooterData(response.items[0]);
        }
      } catch (error) {
        console.error("Error fetching footer data", error);
      }
    };
    fetchFooter();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }
  console.log("footerData***", footerData);

  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_shortcut">
          <h2>genvägar</h2>
          <li className="footer_shortcut-li">våra tjänster</li>
          <li className="footer_shortcut-li">fair transport</li>
          <li className="footer_shortcut-li">om oss</li>
          <li className="footer_shortcut-li">kontakt</li>
        </div>

        <div className="footer_find-us">
          <div>
            <h2>hitta oss</h2>
            <p>{footerData.fields.streetAddress}</p>
            <p>{footerData.fields.postalcode}</p>
            <p>{footerData.fields.city}</p>
          </div>
          <br />
          <div>
            <h2>kontakt</h2>
            <p>{footerData.fields.phoneNumber}</p>
            <p>{footerData.fields.mobileNumber}</p>
            <p>{footerData.fields.email}</p>
          </div>
        </div>

        <div className="footer_media">
          <h2>sociala medier</h2>
          <div className="footer_icon">
            <img src="/images/instagram.svg" alt="" />
            <img src="/images/linkedIn.svg" alt="" />
          </div>
        </div>
        <div className="footer_svg-bg"></div>
      </div>
    </div>
  );
}

export default Footer;
