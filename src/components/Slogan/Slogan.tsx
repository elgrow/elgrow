import { cn } from '@bem-react/classname';
import { useRef } from 'react';
import { useEffect } from 'react';

import './Slogan.scss';

export const Slogan = () => {
  const cnSlogan = cn('Slogan');
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

  return (
    <section className={cnSlogan()} ref={ref}>
      <p className={cnSlogan('line1 _anim-items _anim_no_hide')}>
        Ведем от UX до UI,
      </p>
      <p className={cnSlogan('line2 _anim-items _anim_no_hide')}>
        рубим front<span> не топором,</span>
      </p>
      <p className={cnSlogan('line3 _anim-items _anim_no_hide')}>
        копаем back до золота
      </p>
      <p className={cnSlogan('line4 _anim-items _anim_no_hide')}>
        и тестируем,
      </p>
      <p className={cnSlogan('line5 _anim-items _anim_no_hide')}>
        как космонавтов
      </p>
    </section>
  );
};
