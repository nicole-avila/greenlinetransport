import React from "react";
import "./ServiceCardLarge.css";
import Image from "next/image";
import { useState, useEffect } from "react";

function ServiceCardLarge({ id, imageUrl, imageAlt, title, longText }) {
  const [blurDataURL, setBlurDataURL] = useState('');

  useEffect(() => {
    async function fetchBlurDataURL() {
      const response = await fetch(`${imageUrl}?w=10&h=10&fm=jpg&q=20`);
      const buffer = await response.arrayBuffer();
      const base64String = `data:image/jpeg;base64,${Buffer.from(
        buffer
      ).toString('base64')}`;
      setBlurDataURL(base64String);
    }

    fetchBlurDataURL();
  }, [imageUrl]);

  return (
    <div className="service">
      <div className="service-container">
        <div className="service-img-box">
          {blurDataURL && (
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="service-image"
              width={250}
              height={300}
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
            />)}
        </div>
        <div className="service-text-content">
          <h2 id={id}>{title}</h2>
          <p className="service-desc">{longText}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardLarge;
