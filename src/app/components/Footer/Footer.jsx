"use client";
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

  return <div>{console.log(footerData)}</div>;
}

export default Footer;
