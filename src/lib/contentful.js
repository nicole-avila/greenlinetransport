"use client";
import * as contentful from "contentful";
import { useState, useEffect } from "react";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const fetchEntries = async (contentType) => {
  try {
    const response = await client.getEntries({
      content_type: contentType,
    });
    return response.items || [];
  } catch (error) {
    console.error("Error fetching from Contentful:", error);
    throw error;
  }
};

const useContentful = (contentType) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const entries = await fetchEntries(contentType);
        if (entries.length > 0) {
          setData(entries[0].fields);
        } else {
          setData(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [contentType]);

  return { data, loading, error };
};

export default useContentful;
