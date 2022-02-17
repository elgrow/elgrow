import { cn } from '@bem-react/classname';
import { useEffect, useRef } from 'react';

import './Product.scss';

const cnProduct = cn('Product');

export const Product = () => {
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
        console.log(animItems);
        window.addEventListener('scroll', () => animOnScroll(animItems));
        animOnScroll(animItems);
      }
    }
  }, [ref]);

  return (
    <section className={cnProduct()}>
      <div className={cnProduct('container _anim-items')}>
        <h3 className={cnProduct('container-title')}>Custom dev</h3>
        <ul className={cnProduct('container-list')}>
          <li>.Net</li>
          <li>React</li>
          <li>React Native</li>
        </ul>
      </div>
      <div className={cnProduct('container _anim-items')}>
        <h3 className={cnProduct('container-title')}>Mobile</h3>
        <ul className={cnProduct('container-list')}>
          <li>React Native</li>
          <li>Flutter</li>
        </ul>
      </div>
      <div
        className={cnProduct('container _anim-items', {
          last: true,
        })}
      >
        <h3 className={cnProduct('container-title')}>Web</h3>
        <ul className={cnProduct('container-list')}>
          <li>React</li>
          <li>Vue</li>
          <li>.Python</li>
        </ul>
      </div>
    </section>
  );
};
