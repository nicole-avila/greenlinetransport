'use client';
import Image from 'next/image';
import './Navbar.css';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const pathname = usePathname();

  const handleShowLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  return (
    <nav className='navbar'>
      <div>
        <Link href='/'>
          <Image
            className='navbar_logo'
            src='/images/whiteLogoXs.svg'
            alt='Logo'
            width='185'
            height='80'
          />
        </Link>
      </div>
      <div className={`navbar_links ${showLinks ? 'active' : ''}`}>
        <li className='navbar_link-li'>våra tjänster</li>
        <li className='navbar_link-li'>fair transport</li>
        <li className='navbar_link-li'>om oss</li>
        <li className='navbar_link-li'>
          <Link
            href='/kontakt'
            className={pathname === '/kontakt' ? 'active_route' : ''}
          >
            kontakt
          </Link>
        </li>
      </div>
      <Image
        className='navbar_hamburger'
        src='/images/whiteHamburger.svg'
        alt='Toggle navigation'
        onClick={handleShowLinks}
        width='30'
        height='30'
      />
    </nav>
  );
}

export default Navbar;
