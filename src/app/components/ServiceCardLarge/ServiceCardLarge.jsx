import React from 'react';
import './ServiceCardLarge.css';
import Image from 'next/image';

function ServiceCardLarge({ id, imageUrl, imageAlt, title, longText }) {
  return (
    <div className='service'>
      <div className='service-container'>
        <div className='service-img-box'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            className='service-image'
            width={250}
            height={300}
          />
        </div>
        <div className='service-text-content'>
          <h2 className='service-title' id={id}>
            {title}
          </h2>
          <p className='service-desc'>{longText}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardLarge;
