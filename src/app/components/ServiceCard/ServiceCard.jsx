import './ServiceCard.css';
import Image from 'next/image';
import Link from 'next/link';

function ServiceCard({ linkHref, shortText, title, imageUrl, icon }) {
  return (
    <>
      <div className='landing-image-container'>
        <Image
          src={imageUrl}
          alt='image from the company green line transport the company green line transport'
          width={250}
          height={300}
          className='landing-image'
        />
      </div>
      <div className='landing-text-content'>
        <Image
          src={icon}
          alt='icon in svg file'
          width={25}
          height={25}
          className='landing-icon'
        />
        <h2 className='title'>{title}</h2>
        <p className='landing-description'>{shortText}</p>
        <Link href={linkHref} passHref>
          <button className='landing-button'>Läs Mer</button>
        </Link>
      </div>
    </>
  );
}

export default ServiceCard;

{
  /* <div className='landing-image-container'>
            <Image
              src={`https:${data.styckegodsOmlastning.fields.image.fields.file.url}`}
              alt='image from the company green line transport'
              width={250}
              height={300}
              className='landing-image'
            />
          </div>
          <div className='landing-text-content'>
            <Image
              src='/images/thermo.svg'
              alt='icon in svg file'
              width={25}
              height={25}
              className='landing-icon'
            />
            <h2 className='title'>{data.thermoDistribution.fields.title}</h2>
            <p className='landing-description'>
              {data.thermoDistribution.fields.shortText}
            </p>
            <Link href='/services' className='landing-button'>
              Läs Mer
            </Link>
          </div>
          <div className='landing-image-container'>
            <Image
              src={`https:${data.budservice.fields.image.fields.file.url}`}
              alt='image from the company green line transport'
              width={250}
              height={300}
              className='landing-image'
            />
          </div>
          <div className='landing-text-content'>
            <Image
              src='/images/hand-truck.svg'
              alt='icon in svg file'
              width={25}
              height={25}
              className='landing-icon'
            />
            <h2 className='title'>{data.styckegodsOmlastning.fields.title}</h2>
            <p className='landing-description'>
              {data.styckegodsOmlastning.fields.shortText}
            </p>
            <Link href='/services' passHref>
              <button className='landing-button'>Läs Mer</button>
            </Link>
          </div> */
}
