import { cn } from '@bem-react/classname';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Menu } from '../Menu/Menu';
import { Offer } from '../Offer/Offer';

import './Header.scss';

const cnHeader = cn('Header');

export const Header = () => {
  const [menuColor, setHeader] = useState('fixed');

  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 1) {
      return setHeader('fixed');
    } else if (window.scrollY > 1) {
      return setHeader('fixed2');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header id="main" className={cnHeader()}>
      <div className={cnHeader('owl-front')}></div>
      <div className={cnHeader(menuColor)}></div>
      <div className={`${cnHeader('fixed')} `}>
        <Menu />
      </div>

      <div className={cnHeader('container')}>
        <h1 className={cnHeader('title')}>
          <Parallax speed={-20} translateY={[-165, 60]}>
            e<span className={cnHeader('title_color')}>l</span>grow.
          </Parallax>
        </h1>

        <div className={cnHeader('offer')}>
          <Offer />
        </div>
      </div>
    </header>
  );
};
