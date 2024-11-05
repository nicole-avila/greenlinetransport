"use client";
import "./om-oss.css";
import useContentful from "@/lib/contentful";
import AboutCard from "../components/AboutCard/AboutCard";
import PartnerGallery from "../components/PartnerGallery/PartnerGallery";

export default function About() {
  const { data, loading, error } = useContentful("about");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="about-wrapper margins">
      <AboutCard
        imagePosition="left"
        title={data.title}
        text={data.omOssText}
        imageUrl={`https:${data.omOssImage.fields.file.url}`}
        imageAlt={data.omOssImage.fields.file.fileName}
      />
      <AboutCard
        imagePosition="right"
        title={data.personnelTitle}
        text={data.personnelText}
        imageUrl={`https:${data.personnelImage.fields.file.url}`}
        imageAlt={data.personnelImage.fields.file.fileName}
        buttonText="Kontakta Oss"
        buttonHref="/kontakt"
      />
      <h2 className="about-partners">Samarbetspartners</h2>
      <PartnerGallery partners={data.partners} />
    </div>
  );
}
