"use client";
import useContentful from "@/lib/contentful";
import Form from "../components/Form/Form";

export default function Home() {
  const { data, loading, error } = useContentful("contactUs");

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
      <Form />
    </div>
  );
}
