'use client';
import './Navbar.css';
import Image from 'next/image';
import HomeLinks from '@/app/components/HomeLinks/HomeLinks';
import { useState } from 'react';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  return (
    <nav className='navbar'>
      <HomeLinks showLinks={showLinks} setShowLinks={setShowLinks} />
      <Image
        className='navbar_hamburger'
        src='/images/whiteHamburger.svg'
        alt='Toggle navigation'
        onClick={handleShowLinks}
        width={30}
        height={30}
      />
    </nav>
  );
}

export default Navbar;
