"use client";
import "./PartnerGallery.css";
import Image from "next/image";

export default function PartnerGallery({ partners }) {
  return (
    <div className="partner-gallery">
      {partners &&
        partners.map((partner, key) => {
          return (
            <div className="partner-logo" key={key}>
              <Image
                src={`https:${partner.fields.file.url}`}
                alt={partner.fields.title}
                width={200}
                height={200}
                style={{ width: "auto", height: "50px" }}
              />
            </div>
          );
        })}
    </div>
  );
}
