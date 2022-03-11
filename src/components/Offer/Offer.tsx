import { cn } from '@bem-react/classname';
import { useRef, useState } from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';

import telegram from '../../assets/images/telegram.png';

import './Offer.scss';
import { useEffect } from 'react';

export const Offer = () => {
  const cnOffer = cn('Offer');
  const ref = useRef(null);
  const [range, setRange] = useState(30);
  const width = window.innerWidth;

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
    if (width <= 480 && width > 361) {
      setRange(200);
    } else if (width <= 361) {
      setRange(100);
    } else setRange(30);
  }, [width]);

  const getTitle = (ru: string, en: string) => {
    let lang = localStorage.getItem('language');
    if (lang === 'En') {
      return en;
    } else return ru;
  };

  return (
    <section className={cnOffer()} ref={ref}>
      <p className={cnOffer('text _anim-items')}>
        <Parallax speed={40} translateY={[range, -120]}>
          {getTitle('Разработка и интеграция', 'Design and integration')} <br />
          {getTitle('IT-решений', 'of IT solutions')}
        </Parallax>
      </p>

      <div className={cnOffer('link _anim-items')}>
        <Parallax speed={40} translateY={[30, -120]}>
          <a href="/">
            <img
              className={cnOffer('link-img')}
              src={telegram}
              alt="telegram"
            />
            <span className={cnOffer('link-text')}>
              <a href="https://t.me/@DC6200">
                {getTitle('Связаться в Telegram', 'Contact in Telegram')}
              </a>
            </span>
          </a>
        </Parallax>
      </div>
    </section>
  );
};
