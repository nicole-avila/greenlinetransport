import React from "react";
import "./OurServices.css";
import Image from "next/image";

function OurServices({ data }) {
  const imageOne = `https:${data.thermoDistribution.fields.image.fields.file.url}`;
  const imageTwo = `https:${data.budsvervice.fields.image.fields.file.url}`;
  const imageThree = `https:${data.styckegodsOmlastning.fields.image.fields.file.url}`;

  return (
    <div className="service">
      <div className="service-container">
        <div className="service-img-box">
          <Image
            src={imageOne}
            alt="An image from the company"
            className="service-image"
            width={250}
            height={300}
          />
        </div>
        <div className="service-text-content">
          <h2 className="service-title">
            {data.thermoDistribution.fields.title}
          </h2>
          <p className="service-desc">
            {data.thermoDistribution.fields.longText}
          </p>
        </div>
      </div>

      <div className="service-container">
        <div className="service-img-box">
          <Image
            src={imageTwo}
            alt="An image from the company"
            className="service-image"
            width={250}
            height={300}
          />
        </div>
        <div className="service-text-content">
          <h2 className="service-title">{data.budsvervice.fields.title}</h2>
          <p className="service-desc">{data.budsvervice.fields.longText}</p>
        </div>
      </div>

      <div className="service-container">
        <div className="service-img-box">
          <Image
            src={imageThree}
            alt="An image from the company"
            className="service-image"
            width={250}
            height={300}
          />
        </div>
        <div className="service-text-content">
          <h2 className="service-title">
            {data.styckegodsOmlastning.fields.title}
          </h2>
          <p className="service-desc">
            {data.styckegodsOmlastning.fields.longText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
