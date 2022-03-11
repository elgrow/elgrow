import { cn } from '@bem-react/classname';

import ClientSlider from './ClientSlider';

import asos from '../../assets/images/asos_color.png';
import vtb from '../../assets/images/vtb_color.png';
import kfc from '../../assets/images/kfc_color.png';
import open from '../../assets/images/open_color.png';
import megafon from '../../assets/images/megafon_color.png';
import telecom from '../../assets/images/telecom_color.png';

import './Clients.scss';
import { useEffect, useRef } from 'react';

export const Clients = () => {
  const ref = useRef(null);
  const cnClients = cn('Clients');
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
        console.log(animItems);
        window.addEventListener('scroll', () => animOnScroll(animItems));
        animOnScroll(animItems);
      }
    }
  }, [ref]);

  const clientsLogoPath = [open, kfc, vtb, asos, megafon, telecom];

  const getTranslateTitle = (ru: string, en: string) => {
    let lang = localStorage.getItem('language');
    if (lang === 'en') {
      return en;
    } else return ru;
  };

  return (
    <section id="clients" className={cnClients()}>
      <h2 className={cnClients('title _anim-items')}>
        {getTranslateTitle('Клиенты', 'Clients')}
      </h2>
      <div className={cnClients('container')}>
        <ClientSlider />
      </div>
      <div className={cnClients('container320')}>
        {clientsLogoPath.map((card, index) => (
          <div className={cnClients('container-card')} key={index}>
            <img src={card} alt="client" />
          </div>
        ))}
      </div>
    </section>
  );
};
