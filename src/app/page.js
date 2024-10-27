"use client";
import useContentful from "@/lib/contentful";
import Hero from "./components/Hero/Hero";
import LandingPage from "./components/LandingPage/LandingPage";

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
        heroImage={`https:${data.heroImage.fields.file.url}`}
        heroTitle={data.heroTitle}
      />
      <LandingPage data={data} />
    </div>
  );
}
