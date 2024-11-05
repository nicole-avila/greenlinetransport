"use client";
import "./AboutCard.css";
import Image from "next/image";
import Button from "../_atoms/Button/Button";

export default function AboutCard({
  imagePosition,
  text,
  imageUrl,
  imageAlt,
  buttonText,
  buttonHref,
}) {
  return (
    <div className={`about-card about-card-${imagePosition}`}>
      <div className="about-card-text">
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
        />
      </div>
    </div>
  );
}
