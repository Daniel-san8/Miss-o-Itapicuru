'use client';

import React, { useRef } from 'react';
import MenuHamburguer from './MenuHamburguer';

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    addEventListener('scroll', changeHeader);

    function changeHeader() {
      const scrollY = window.scrollY;
      if (headerRef.current && scrollY > 1) {
        headerRef.current.classList.remove('headerNoActivate');
        headerRef.current.classList.add('headerActivate');
      }
      if (headerRef.current && scrollY === 0) {
        headerRef.current.classList.remove('headerActivate');
        headerRef.current.classList.add('headerNoActivate');
      }
    }

    return () => {
      removeEventListener('scroll', changeHeader);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef} className='headerActivate'>
      <div>
        Missão <span className='font-bold'>Itapicuru</span>
      </div>
      <MenuHamburguer />
    </header>
  );
}
