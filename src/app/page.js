"use client";
import "./globals.css";
import useContentful from "@/lib/contentful";
import Hero from "./components/Hero/Hero";
import ServiceCardSmall from "./components/ServiceCardSmall/ServiceCardSmall";
import FairTransport from "./components/FairTransport/FairTransport";

export default function Home() {
  const { data, loading, error } = useContentful("landingPage");

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
    <div>
      <Hero
        heroImage={{
          file: {
            url: `https:${data.heroImage.fields.file.url}`,
            contentType: data.heroImage.fields.file.contentType,
          },
        }}
        heroTitle={data.heroTitle}
        heroParagraph={data.heroParagraph}
      />
      <div className="margins">
        <div className="landing">
          <div className="landing-grid-container">
            <div className="landing-grid">
              <ServiceCardSmall
                shortText={data.budservice.fields.shortText}
                linkHref="/services#budservice"
                title={data.budservice.fields.title}
                imageUrl={`https:${data.budservice.fields.image.fields.file.url}`}
                imageAlt={data.budservice.fields.image.fields.title}
                icon="/images/truck.svg"
                iconAlt="icon of a truck"
              />
              <ServiceCardSmall
                shortText={data.thermoDistribution.fields.shortText}
                linkHref="/services#thermo-distribution"
                title={data.thermoDistribution.fields.title}
                imageUrl={`https:${data.thermoDistribution.fields.image.fields.file.url}`}
                imageAlt={data.thermoDistribution.fields.image.fields.title}
                icon="/images/thermo.svg"
                iconAlt="icon of a thermometer and snowflake"
              />
              <ServiceCardSmall
                shortText={data.styckegodsOmlastning.fields.shortText}
                linkHref="/services#styckegods-omlastning"
                title={data.styckegodsOmlastning.fields.title}
                imageUrl={`https:${data.styckegodsOmlastning.fields.image.fields.file.url}`}
                imageAlt={data.styckegodsOmlastning.fields.image.fields.title}
                icon="/images/hand-truck.svg"
                iconAlt="icon of a handtruck loaded with boxes"
              />
            </div>
          </div>
        </div>
        <div className="home-bottom-container">
          <FairTransport data={data} />
        </div>
      </div>
    </div>
  );
}
