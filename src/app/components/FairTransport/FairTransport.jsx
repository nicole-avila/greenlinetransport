import React from "react";
import "./FairTransport.css";
import Image from "next/image";
import Link from "next/link";

function FairTransport({ data }) {
  return (
    <div id="fair-transport" className="content-wrapper">
      <div className="content-image">
        <Image
          src={`https:${data.fairTransportImage.fields.file.url}`}
          alt="Fair Transport Image"
          width={250}
          height={300}
          className="image-style"
        />
      </div>
      <div className="content-text">
        <h2>{data.fairTransportTitle}</h2>
        <p>{data.fairTransportText}</p>
        <br />
        <br />
        <div className="content-our-mission">
          <Image
            src="/images/globe.svg"
            alt="icon in svg file"
            width={25}
            height={25}
            className="landing-icon"
          />
          <p>
            <strong>Our Mission:</strong> {data.fairTransportShortText}
          </p>
        </div>
        <div className="content-icon">
          <Image
            src="/images/link-line.svg"
            alt="icon in svg file"
            width={25}
            height={25}
            className="landing-icon"
          />
          <Link
            href={data.fairTransportLink}
            target="_blank"
            rel="noopener noreferrer"
            className="content-link"
          >
            Länk till Fair Transport
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FairTransport;
