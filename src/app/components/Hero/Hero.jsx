"use client";
import "./Hero.css";
import Image from "next/image";
import { useEffect, useState } from "react";

function Hero({ heroImage, heroTitle, heroParagraph, textPosition }) {
  const [blurDataURL, setBlurDataURL] = useState("");

  useEffect(() => {
    async function fetchBlurDataURL() {
      const response = await fetch(`${heroImage}?w=10&h=10&fm=jpg&q=20`);
      const buffer = await response.arrayBuffer();
      const base64String = `data:image/jpeg;base64,${Buffer.from(
        buffer
      ).toString("base64")}`;
      setBlurDataURL(base64String);
    }

    fetchBlurDataURL();
  }, [heroImage]);

  return (
    <>
      {blurDataURL && (
        <div className="hero">
          <div className={`hero__title hero-text-${textPosition}`}>
            {heroTitle}
            <br />
            <div className="hero-subtext">
              <p className="hero-paragraph">{heroParagraph}</p>
            </div>
          </div>
          <div className="hero-image-wrapper">
            {heroImage && (
              <Image
                src={`${heroImage}?fm=webp&q=80`}
                alt="Hero Image"
                width={1920}
                height={700}
                priority
                className="hero__image"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
