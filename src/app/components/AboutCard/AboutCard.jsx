"use client";
import "./AboutCard.css";
import Image from "next/image";
import Button from "../_atoms/Button/Button";
import { useState, useEffect } from "react";

export default function AboutCard({
  imagePosition,
  text,
  imageUrl,
  imageAlt,
  buttonText,
  buttonHref,
  title,
}) {

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
    <div className={`about-card about-card-${imagePosition}`}>
      <div className="about-card-text">
        <h2 className="about-card-title">{title}</h2>
        <p>{text}</p>
        {buttonText && (
          <div>
            <br />
            <br />
            <Button text={buttonText} href={buttonHref} />
          </div>
        )}
      </div>
      <div className="about-card-image">
        {blurDataURL && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={666}
            height={381}
            sizes="(max-width: 500px) 100vw, (max-width: 800px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              height: "auto",
            }}
            placeholder='blur'
            blurDataURL={blurDataURL}
          />)}
      </div>
    </div>
  );
}
