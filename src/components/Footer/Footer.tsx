import { cn } from '@bem-react/classname';
import { useEffect, useRef } from 'react';

import telegram from '../../assets/images/telegram.png';

import './Footer.scss';

export const Footer = () => {
  const cnFooter = cn('Footer');

  const ref = useRef(null);

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
      }
    }
  }, [ref]);

  const getTranslateTitle = (ru: string, en: string) => {
    let lang = localStorage.getItem('language');
    if (lang === 'en') {
      return en;
    } else return ru;
  };
  return (
    <footer id="contacts" className={cnFooter()}>
      <h2 className={cnFooter('title _anim-items')}>
        {getTranslateTitle('Контакты', 'Contacts')}
      </h2>
      <div className={cnFooter('container')}>
        <ul className={cnFooter('list')}>
          <li className={cnFooter('list-mail _anim-items')}>
            <button className={`${cnFooter('list-mail-button')}`}>
              <a href="mailto:info@elgrow.ru">
                <span>info@elgrow.ru</span>
              </a>
            </button>
          </li>
          <li className={cnFooter('list-phone _anim-items')}>
            <button className={`${cnFooter('list-phone-button')}`}>
              <a href="tel:+79221521563">+ 7 343 938 99 49</a>
            </button>
          </li>
        </ul>
        <ul className={cnFooter('list')}>
          <li className={`${cnFooter('list-telegram _anim-items')}`}>
            <button className={`${cnFooter('list-telegram-button')}`}>
              <img
                className={`${cnFooter('list-telegram-img')}`}
                src={telegram}
                alt="telegram"
              />
              <span className={`${cnFooter('list-telegram-text')}`}>
                <a href="https://t.me/@DC6200">
                  {getTranslateTitle(
                    'Связаться в Telegram',
                    'Contact in Telegram'
                  )}
                </a>
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className={cnFooter('wrapperCopyright')}>
        <div className={cnFooter('copyright')}>© 2022 elgrow.</div>
      </div>
    </footer>
  );
};
