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

  console.log(data);

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
            <Link className="footer-email" href={`mailto:${data.email}`}>
              {data.email}
            </Link>
          </div>
        </div>

        <div className="footer_media">
          <h4>sociala medier</h4>
          <div className="footer_icon">
            <Link href={data.instagram} target="_blank">
              <Image
                className="footer_icon-link"
                src="/images/instagram.svg"
                alt=""
                width={30}
                height={30}
              />
            </Link>
            {/* <Image
              className="footer_icon-link"
              src="/images/linkedIn.svg"
              alt=""
              width={30}
              height={30}
            /> */}
          </div>
        </div>
      </div>
      <div className="footer_svg-bg">
        <Image
          src="/images/Greenline.png"
          alt=""
          width={150}
          height={100}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default Footer;
