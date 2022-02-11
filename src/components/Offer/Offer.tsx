import { cn } from '@bem-react/classname';
import { useState } from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';

import telegram from '../../assets/images/telegram.png';

import './Offer.scss';
import { useEffect } from 'react';

export const Offer = () => {
  const cnOffer = cn('Offer');
  const [range, setRange] = useState(30);
  const width = window.innerWidth;

  useEffect(() => {
    if (width <= 480 && width > 361) {
      setRange(200);
    } else if (width <= 361) {
      setRange(100);
    } else setRange(30);
  }, [width]);

  return (
    <section className={cnOffer()}>
      <p className={cnOffer('text')}>
        <Parallax speed={40} translateY={[range, -120]}>
          Разработка и интеграция <br />
          IT-решений
        </Parallax>
      </p>

      <div className={cnOffer('link')}>
        <Parallax speed={40} translateY={[30, -120]}>
          <a href="/">
            <img
              className={cnOffer('link-img')}
              src={telegram}
              alt="telegram"
            />
            <span className={cnOffer('link-text')}>
              <a href="https://t.me/@DC6200">Связаться в Telegram</a>
            </span>
          </a>
        </Parallax>
      </div>
    </section>
  );
};
