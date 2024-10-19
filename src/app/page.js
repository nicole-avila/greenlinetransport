"use client";
import useContentful from "@/lib/contentful";
import Image from "next/image";
import Hero from "./components/Hero/Hero";

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
      <p>{data.heroTitle}</p>
    </div>
  );
}
