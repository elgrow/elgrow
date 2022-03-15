import { cn } from '@bem-react/classname';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import telegram from '../../assets/images/telegram.png';
import LinkRedirectScroll from '../LinkRedirectScroll/LinkRedirectScroll';

import './Menu.scss';

export const Menu = () => {
  const history = useNavigate();
  const ref = useRef(null);
  const cnMenu = cn('Menu');
  const [buttonState, setButtonState] = useState({
    toggle: false,
    wrapper: false,
    displayNone: false,
    displayBlock: false,
  });

  const [langData, setLangData] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    let lang = localStorage.getItem('language');
    if (!lang) {
      localStorage.setItem('language', 'Ru');
      setLangData('Ru');
    } else setLangData(lang[0].toUpperCase() + lang.slice(1));
  }, []);

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

  const scrollWithOffsetAfterRedirect = (el: any, offset: number) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({ top: yCoordinate + offset, behavior: 'smooth' });
  };

  const changeURLLanguage = () => {
    let pathesArr = pathname.split('/');

    if (langData === 'Ru') {
      localStorage.setItem('language', 'en');
      setLangData('En');
      pathesArr.splice(1, 1, 'en');
      pathesArr.join('/');
      window.location.replace(pathesArr.join('/'));
    } else {
      localStorage.setItem('language', 'ru');
      setLangData('Ru');
      pathesArr.splice(1, 1, 'ru');
      pathesArr.join('/');
      window.location.replace(pathesArr.join('/'));
    }
  };

  const getTitle = (ru: string, en: string) => {
    let lang = localStorage.getItem('language');
    if (lang === 'en') {
      return en;
    } else return ru;
  };

  return (
    <menu className={cnMenu()}>
      <div className={`${cnMenu('logo _anim2-items')} `}>
        {/* <Link to="/#main">
          e<span className={cnMenu('logo_color')}>l</span>grow.
        </Link> */}
      </div>
      <ul className={`${cnMenu(`${menuWrapper}`)} ${cnMenu('list')}`}>
        <div className={`${cnMenu('burger-logo')} `}>
          <a href="/#main">
            e<span className={cnMenu('logo_color')}>l</span>grow.
          </a>
        </div>
        <div className={`${cnMenu('menuContainer')}`}>
          <li className={`${cnMenu('link _anim-items')}`}>
            <LinkRedirectScroll
              title={
                <>
                  e<span className={cnMenu('logo_color')}>l</span>grow.
                </>
              }
              path={pathname}
              closeBurger={closeBurger}
              linkTo="main"
              offset={0}
            />
          </li>
          <li className={`${cnMenu('link _anim-items')}`}>
            <LinkRedirectScroll
              title={getTitle('Клиенты', 'Clients')}
              path={pathname}
              closeBurger={closeBurger}
              linkTo="clients"
              offset={getOffsetAfterLink(170)}
              scrollWithOffsetAfterRedirect={scrollWithOffsetAfterRedirect}
            />
          </li>
          <li className={`${cnMenu('link _anim-items')}`}>
            <LinkRedirectScroll
              title={getTitle('Продукты', 'Products')}
              path={pathname}
              closeBurger={closeBurger}
              linkTo="projects"
              offset={getOffsetAfterLink(140)}
              scrollWithOffsetAfterRedirect={scrollWithOffsetAfterRedirect}
            />
          </li>
          <li className={`${cnMenu('link _anim-items')}`}>
            <LinkRedirectScroll
              title={getTitle('Контакты', 'Contacts')}
              path={pathname}
              closeBurger={closeBurger}
              linkTo="contacts"
              offset={getOffsetAfterLink(170)}
              scrollWithOffsetAfterRedirect={scrollWithOffsetAfterRedirect}
            />
          </li>
          <li className={`${cnMenu('link _anim-items')}`}>
            <div className={`${cnMenu('select')}`}>
              <li onClick={changeURLLanguage} id="standard-select">
                {langData}
              </li>
              <span className={`${cnMenu('focus')}`}></span>
            </div>
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
              <a href="https://t.me/@DC6200">
                {getTitle('Связаться в Telegram', 'Contact in Telegram')}
              </a>
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
