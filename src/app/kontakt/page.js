'use client';
import useContentful from '@/lib/contentful';
import Form from '../components/Form/Form';
import Hero from '../components/Hero/Hero';

export default function Home() {
  const { data, loading, error } = useContentful('contactUs');

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
    <>
      <Hero
        heroImage={`https:${data.heroImage.fields.file.url}`}
        heroTitle={data.heroTitle}
        heroParagraph={data.heroParagraph}
      />
      <Form />
    </>
  );
}
