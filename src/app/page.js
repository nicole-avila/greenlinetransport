"use client";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import client from "@/lib/contentful";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "landingPage",
        });

        if (response.items.length > 0) {
          setData(response.items[0]);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {console.log("data***", data)}
      <h1> glt</h1>
      <Footer />
    </div>
  );
}
