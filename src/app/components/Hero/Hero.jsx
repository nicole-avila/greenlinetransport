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
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      )}
    </div>
  );
}

export default Hero;
