'use client';
import useContentful from '@/lib/contentful';
import Hero from './components/Hero/Hero';
import ServiceCard from './components/ServiceCard/ServiceCard';
import FairTransport from './components/FairTransport/FairTransport';

export default function Home() {
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
      {console.log(data)}
      <div className='landing'>
        <div className='landing-grid-container'>
          <div className='landing-grid'>
            <ServiceCard
              shortText={data.budservice.fields.shortText}
              linkHref='/services'
              title={data.budservice.fields.title}
              imageUrl={`https:${data.thermoDistribution.fields.image.fields.file.url}`}
              imageAlt='image from the company green line transport the company green line transport'
              icon='/images/truck.svg'
              iconAlt='icon of a truck'
            />
            <ServiceCard
              shortText={data.thermoDistribution.fields.shortText}
              linkHref='/services'
              title={data.thermoDistribution.fields.title}
              imageUrl={`https:${data.styckegodsOmlastning.fields.image.fields.file.url}`}
              imageAlt='image from the company green line transport the company green line transport'
              icon='/images/thermo.svg'
              iconAlt='icon of a thermometer and snowflake'
            />
            <ServiceCard
              shortText={data.styckegodsOmlastning.fields.shortText}
              linkHref='/services'
              title={data.styckegodsOmlastning.fields.title}
              imageUrl={`https:${data.budservice.fields.image.fields.file.url}`}
              imageAlt='image from the company green line transport the company green line transport'
              icon='/images/hand-truck.svg'
              iconAlt='icon of a handtruck loaded with boxes'
            />
          </div>
        </div>
      </div>
      <FairTransport data={data} />
    </div>
  );
}
