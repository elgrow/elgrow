import { cn } from '@bem-react/classname';
import { useEffect, useState } from 'react';

import telegram from '../../assets/images/telegram.png';

import './Menu.scss';

const cnMenu = cn('Menu');

export const Menu = () => {
  const [buttonState, setButtonState] = useState({
    toggle: false,
    wrapper: false,
    displayNone: false,
    displayBlock: false,
  });

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

  const closeBurger = () => {
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

  return (
    <menu className={cnMenu()}>
      <div className={`${cnMenu('logo')} `}>
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
        <li className={`${cnMenu(`${displayNone}`)} ${cnMenu('link')}`}>
          <a
            className={cnMenu('link-button')}
            href="/#main"
            onClick={closeBurger}
          >
            Главная
          </a>
          {/* </button> */}
        </li>
        <li className={`${cnMenu('link')}`}>
          {/* <button className={cnMenu('link-button')}> */}
          <a href="/#clients" onClick={closeBurger}>
            Клиенты
          </a>
          {/* </button> */}
        </li>
        <li className={`${cnMenu('link')}`}>
          {/* <button className={cnMenu('link-button')}> */}
          <a href="/#projects" onClick={closeBurger}>
            Продукты
          </a>
          {/* </button> */}
        </li>
        <li className={`${cnMenu('link')}`}>
          {/* <button className={cnMenu('link-button')}> */}
          <a href="/#contacts" onClick={closeBurger}>
            Контакты
          </a>
          {/* </button> */}
        </li>
        <li
          className={`${cnMenu(`${displayNone}`)} ${cnMenu('burger-connect', {
            phone: true,
          })}`}
        >
          <a href="tel:+79221521563">+ 7 343 938 99 49</a>
        </li>
        <li
          className={`${cnMenu(`${displayNone}`)} ${cnMenu('burger-connect')}`}
        >
          <a href="mailto:dmitry@elgrow.ru">dmitry@elgrow.ru</a>
        </li>
        <li
          className={`${cnMenu(`${displayNone}`)} ${cnMenu('burger-connect')}`}
        >
          <img className={cnMenu('link-img')} src={telegram} alt="telegram" />
          <button className={cnMenu('link-button')}>
            <a href="https://t.me/@DC6200">Связаться в Telegram</a>
          </button>
        </li>
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
