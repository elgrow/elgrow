import { cn } from '@bem-react/classname';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

import telegram from '../../assets/images/telegram.png';

import './Menu.scss';

export const Menu = () => {
  const ref = useRef(null);
  const cnMenu = cn('Menu');
  const [buttonState, setButtonState] = useState({
    toggle: false,
    wrapper: false,
    displayNone: false,
    displayBlock: false,
  });

  const getOffsetAfterLink = (offset: number) => {
    if (window.innerWidth < 480) {
      return 0;
    }
    return offset;
  };

  const menuToggle = buttonState.toggle ? '_opened' : '_closed';
  const menuWrapper = buttonState.wrapper ? 'burger-wrapper' : 'wrapper';
  const displayNone = buttonState.displayNone
    ? 'display-block'
    : 'display-none';
  const displayBlock = buttonState.displayBlock
    ? 'display-none'
    : 'display-block';

  const handleBurgerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonState(prev => ({
      ...prev,
      toggle: !prev.toggle,
      wrapper: !prev.wrapper,
      displayNone: !prev.displayNone,
      displayBlock: !prev.displayBlock,
    }));
  };

  const closeBurger = (block: any) => {
    setButtonState(prev => ({
      ...prev,
      toggle: false,
      wrapper: false,
      displayNone: false,
      displayBlock: false,
    }));
  };

  const [fixedTime, setFixedTime] = useState('call_time');

  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 1) {
      return setFixedTime('call_time');
    } else if (window.scrollY > 1) {
      return setFixedTime('call_time_none');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

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

  return (
    <menu className={cnMenu()}>
      <div className={`${cnMenu('logo _anim-items')} `}>
        <a href="/#main">
          e<span className={cnMenu('logo_color')}>l</span>grow.
        </a>
      </div>
      <ul className={`${cnMenu(`${menuWrapper}`)} ${cnMenu('list')}`}>
        <div className={`${cnMenu('burger-logo')} `}>
          <a href="/#main">
            e<span className={cnMenu('logo_color')}>l</span>grow.
          </a>
        </div>
        <div className={`${cnMenu('menuContainer')}`}>
          <li className={`${cnMenu('link _anim-items')}`}>
            <Link
              to="main"
              spy={true}
              smooth={true}
              onSetActive={closeBurger}
              offset={0}
              duration={100}
            >
              Главная
            </Link>
          </li>
          <li className={`${cnMenu('link _anim-items')}`}>
            <Link
              to="clients"
              spy={true}
              smooth={true}
              onSetActive={closeBurger}
              offset={getOffsetAfterLink(170)}
              duration={100}
            >
              Клиенты
            </Link>
          </li>
          <li className={`${cnMenu('link _anim-items')}`}>
            <Link
              to="projects"
              spy={true}
              onSetActive={closeBurger}
              smooth={true}
              offset={getOffsetAfterLink(140)}
              duration={100}
            >
              Продукты
            </Link>
          </li>
          <li className={`${cnMenu('link _anim-items')}`}>
            <Link
              to="contacts"
              spy={true}
              onSetActive={closeBurger}
              smooth={true}
              offset={getOffsetAfterLink(170)}
              duration={100}
            >
              Контакты
            </Link>
          </li>
        </div>

        <div className={`${cnMenu('contactsContainer')}`}>
          <div
            className={`${cnMenu(`${displayNone}`)} ${cnMenu('burger-connect', {
              phone: true,
            })}`}
          >
            <a href="tel:+79221521563">+ 7 343 938 99 49</a>
          </div>
          <div
            className={`${cnMenu(`${displayNone}`)} ${cnMenu(
              'burger-connect'
            )}`}
          >
            <a href="mailto:dmitry@elgrow.ru">dmitry@elgrow.ru</a>
          </div>
          <div
            className={`${cnMenu(`${displayNone}`)} ${cnMenu(
              'burger-connect'
            )}`}
          >
            <img className={cnMenu('link-img')} src={telegram} alt="telegram" />
            <button className={cnMenu('link-button')}>
              <a href="https://t.me/@DC6200">Связаться в Telegram</a>
            </button>
          </div>{' '}
        </div>
      </ul>
      <div className={`${cnMenu('call')} ${cnMenu(`${displayBlock}`)}`}>
        <div className={cnMenu('call_phone')}>
          <a href="tel:+79221521563">+ 7 343 938 99 49</a>
        </div>
      </div>
      <button
        type="button"
        className={`${cnMenu('burger-button')} ${cnMenu(
          'burger-button'
        )}${menuToggle}`}
        onClick={handleBurgerClick}
      ></button>
    </menu>
  );
};
