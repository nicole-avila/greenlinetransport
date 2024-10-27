'use client';
import React from 'react';
import Hero from '../components/Hero/Hero';
import useContentful from '@/lib/contentful';
import ServiceCardLarge from '../components/ServiceCardLarge/ServiceCardLarge';

function Services() {
  const { data, loading, error } = useContentful('landingPage');

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
      <ServiceCardLarge
        imageUrl={`https:${data.thermoDistribution.fields.image.fields.file.url}`}
        imageAlt={data.thermoDistribution.fields.image.fields.title}
        title={data.thermoDistribution.fields.title}
        id='thermo-distribution'
        longText={data.thermoDistribution.fields.longText}
      />
      <ServiceCardLarge
        imageUrl={`https:${data.budservice.fields.image.fields.file.url}`}
        imageAlt={data.budservice.fields.image.fields.title}
        title={data.budservice.fields.title}
        id='budservice'
        longText={data.budservice.fields.longText}
      />
      <ServiceCardLarge
        imageUrl={`https:${data.styckegodsOmlastning.fields.image.fields.file.url}`}
        imageAlt={data.styckegodsOmlastning.fields.image.fields.title}
        title={data.styckegodsOmlastning.fields.title}
        id='styckegods-omlastning'
        longText={data.styckegodsOmlastning.fields.longText}
      />
    </div>
  );
}

export default Services;
