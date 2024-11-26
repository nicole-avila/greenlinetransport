"use client";
import "./Hero.css";
import Image from "next/image";
import { useEffect, useState } from "react";

function Hero({ heroImage, heroTitle, heroParagraph, textPosition }) {
  const [blurDataURL, setBlurDataURL] = useState("");

  useEffect(() => {
    async function fetchBlurDataURL() {
      if (heroImage && heroImage.file && heroImage.file.url) {
        if (
          heroImage.file.contentType === "image/jpeg" ||
          heroImage.file.contentType === "image/png"
        ) {
          const response = await fetch(
            `${heroImage.file.url}?w=10&h=10&fm=jpg&q=20`
          );
          const buffer = await response.arrayBuffer();
          const base64String = `data:image/jpeg;base64,${Buffer.from(
            buffer
          ).toString("base64")}`;
          setBlurDataURL(base64String);
        }
      } else {
        console.warn("Hero image or file is undefined:", heroImage);
      }
    }

    fetchBlurDataURL();
  }, [heroImage]);

  const videoUrl = heroImage?.file?.url;

  return (
    <>
      {heroImage && (typeof heroImage === "string" || heroImage.file) ? (
        <div className="hero">
          <div className={`hero__title hero-text-${textPosition}`}>
            {heroTitle}
            <br />
            <div className="hero-subtext">
              <p className="hero-paragraph">{heroParagraph}</p>
            </div>
          </div>
          <div className="hero-image-wrapper">
            {heroImage.file?.contentType === "video/mp4" ? (
              <video
                className="hero-video"
                width="100%"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={
                  typeof heroImage === "string"
                    ? heroImage
                    : `https:${heroImage.file.url}`
                }
                alt={heroTitle || "Hero Image"}
                width={1920}
                height={700}
                priority
                className="hero__image"
                blurDataURL={blurDataURL}
              />
            )}
          </div>
        </div>
      ) : (
        <Image
          src={"/images/greenField-trucks.jpg"}
          alt={heroTitle || "Hero Image"}
          width={1920}
          height={700}
          priority
          className="hero__image"
          blurDataURL={blurDataURL}
        />
      )}
    </>
  );
}

export default Hero;
