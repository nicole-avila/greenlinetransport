"use client";
import React from "react";
import Hero from "../components/Hero/Hero";
import OurServices from "../components/OurServices/OurServices";
import useContentful from "@/lib/contentful";

function Services() {
  const { data, loading, error } = useContentful("service");

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
        heroImage={`https:${data.heroImage.fields.file.url}`}
        heroTitle={data.heroTitle}
      />
      <OurServices data={data} />
    </div>
  );
}

export default Services;
