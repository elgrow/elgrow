import { cn } from '@bem-react/classname';
import { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Menu } from '../Menu/Menu';
import { Offer } from '../Offer/Offer';

import './Header.scss';

export const Header = () => {
  const cnHeader = cn('Header');
  const ref = useRef(null);
  const [menuColor, setHeader] = useState('fixed');

  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 1) {
      return setHeader('fixed');
    } else if (window.scrollY > 1) {
      return setHeader('fixed2');
    }
  };

  const animOnScroll = (animItems: any) => {
    for (let index = 0; index < animItems.length; index++) {
      const animItem: any = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim_no_hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
    function offset(el: any) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  };

  useEffect(() => {
    if (ref.current) {
      const animItems = document.querySelectorAll('._anim-items');
      if (animItems.length > 0) {
        window.addEventListener('scroll', () => animOnScroll(animItems));
        animOnScroll(animItems);
      }
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header id="main" className={cnHeader()}>
      <div id='owlFront' className={cnHeader('owl-front')}></div>
      <div className={cnHeader(menuColor)}></div>
      <div className={`${cnHeader('fixed')} `}>
        <Menu />
      </div>

      <div className={cnHeader('container')}>
        <h1 className={cnHeader('title _anim-items')}>
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
