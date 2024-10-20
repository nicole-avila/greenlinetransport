'use client';
import Image from 'next/image';
import './Footer.css';
import useContentful from '@/lib/contentful';
import Link from 'next/link';

function Footer() {
  const { data, loading, error } = useContentful('footer');

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
    <div className='footer'>
      <div className='footer_content'>
        <div className='footer_shortcut'>
          <h2>genvägar</h2>
          <li className='footer_shortcut-li'>våra tjänster</li>
          <li className='footer_shortcut-li'>fair transport</li>
          <li className='footer_shortcut-li'>om oss</li>
          <li className='footer_shortcut-li'>
            <Link href='/kontakt'>kontakt</Link>
          </li>
        </div>

        <div className='footer_find-us'>
          <div>
            <h2>hitta oss</h2>
            <p>{data.streetAddress}</p>
            <p>{data.postalcode}</p>
            <p>{data.city}</p>
          </div>
          <br />
          <div>
            <h2>kontakt</h2>
            <p>{data.phoneNumber}</p>
            <p>{data.mobileNumber}</p>
            <p>{data.email}</p>
          </div>
        </div>

        <div className='footer_media'>
          <h2>sociala medier</h2>
          <div className='footer_icon'>
            <Image src='/images/instagram.svg' alt='' width='30' height='30' />
            <Image src='/images/linkedIn.svg' alt='' width='30' height='30' />
          </div>
        </div>
        <div className='footer_svg-bg'></div>
      </div>
    </div>
  );
}

export default Footer;
