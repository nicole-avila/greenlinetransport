import './ServiceCardSmall.css';
import Image from 'next/image';
import Button from '../_atoms/Button/Button';

function ServiceCardSmall({
  linkHref,
  shortText,
  title,
  imageUrl,
  imageAlt,
  icon,
  iconAlt,
}) {
  return (
    <>
      <div className='landing-image-container'>
        <Image
          src={imageUrl}
          width={250}
          height={300}
          className='landing-image'
          alt={imageAlt}
        />
      </div>
      <div className='landing-text-content'>
        <Image
          src={icon}
          alt={iconAlt}
          width={25}
          height={25}
          className='landing-icon'
        />
        <h3>{title}</h3>
        <p className='landing-description'>{shortText}</p>
        <Button href={linkHref} text='LÄS MER' />
      </div>
    </>
  );
}

export default ServiceCardSmall;
