"use client";
import "./Hero.css";
import Image from "next/image";

function Hero({ heroImage, heroTitle }) {
  return (
    <div className="hero">
      <p className="hero__title">{heroTitle}</p>
      {heroImage && (
        <Image
          src={heroImage}
          alt="Hero Image"
          width={500}
          height={300}
          priority
          className="hero__image"
          // layout="responsive"
        />
      )}
    </div>
  );
}

export default Hero;
