import { cn } from '@bem-react/classname';
import { useEffect, useRef, useState } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import telegram from '../../assets/images/telegram.png';
import locationIcon from '../../assets/images/locationIcon.png';
import mail from '../../assets/images/mail.png';

import './Footer.scss';

export const Footer = () => {
  const cnFooter = cn('Footer');

  const [phoneNumber, setphoneNumber] = useState('+7 495 109 90 49');

  const citiesArr: any = document.getElementsByClassName(
    'Footer-list-cityName _anim-items _active'
  );
  const addressesArr: any = document.getElementsByClassName(
    'Footer-list-cityName-street'
  );
  const iconsLocations: any = document.getElementsByClassName(
    'Footer-list-cityName-location'
  );

  const map: any = useRef();

  const myPanTo = (coordinates: number[]) => {
    map.current.panTo(coordinates, {
      duration: 500,

      timingFunction: 'linear',
    });
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
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
      window.addEventListener('scroll', () => animOnScroll(animItems));
    }
  }, []);

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 14,
  };

  const pickCity = (city: string, address: string, icon: string) => {
    const footer: any = document.getElementById('contacts');
    const buttonCity = document.getElementById(city);
    const phone = document.getElementById('phoneNum');
    const oficeAddress = document.getElementById(address);
    const iconPicked = document.getElementById(icon);
    for (const icon of iconsLocations) {
      icon?.classList.remove('_picked');
    }
    for (const address of addressesArr) {
      address?.classList.remove('_picked');
    }
    for (const city of citiesArr) {
      city?.classList.remove('_picked');
    }
    buttonCity?.classList.add('_picked');
    oficeAddress?.classList.add('_picked');
    iconPicked?.classList.add('_picked');
    footer?.classList.remove('ekb');
    footer?.classList.remove('spb');
    footer?.classList.remove('msk');
    phone?.classList.remove('_active');

    if (city === 'EKB') {
      myPanTo([56.838011, 60.597474]);
      setphoneNumber('+7 343 302 90 49');
      setTimeout(() => {
        phone?.classList.add('_active');
      }, 500);
    } else if (city === 'MSK') {
      myPanTo([55.751574, 37.573856]);
      setphoneNumber('+7 495 109 90 49');
      setTimeout(() => {
        phone?.classList.add('_active');
      }, 500);
    } else if (city === 'SPB') {
      myPanTo([59.939099, 30.315877]);
      setphoneNumber('+7 812 209 90 49');
      setTimeout(() => {
        phone?.classList.add('_active');
      }, 500);
    }
  };

  const getTranslateTitle = (ru: string, en: string) => {
    let lang = localStorage.getItem('language');
    if (lang === 'en') {
      return en;
    } else return ru;
  };

  useEffect(() => {
    setTimeout(() => {
      pickCity('MSK', 'MSKStreet', 'icon1');
    }, 0);
  }, []);
  return (
    <YMaps>
      <div style={{ position: 'relative' }}>
        <Map
          className={cnFooter('mapContainer')}
          instanceRef={map}
          defaultState={defaultState}
        />
        <footer id="contacts" className={cnFooter()}>
          <div className={cnFooter('container')}>
            <h2 className={cnFooter('title _anim-items')}>
              {getTranslateTitle('????????????????', 'Contacts')}
            </h2>
            <ul className={cnFooter('list')}>
              <li id="phoneNum" className={cnFooter('list-phone _anim-items')}>
                <button className={`${cnFooter('list-phone-button')}`}>
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </button>
              </li>
              <div className={cnFooter('list-contactsWrapper')}>
                <li className={`${cnFooter('list-telegram _anim-items')}`}>
                  <button className={`${cnFooter('list-telegram-button')}`}>
                    <img
                      className={`${cnFooter('list-telegram-img')}`}
                      src={telegram}
                      alt="telegram"
                    />
                    <span className={`${cnFooter('list-telegram-text')}`}>
                      <a href="https://t.me/@DC6200">
                        {getTranslateTitle('Elgrow_dev', 'Elgrow_dev')}
                      </a>
                    </span>
                  </button>
                </li>
                <li className={cnFooter('list-mail _anim-items')}>
                  <button className={`${cnFooter('list-mail-button')}`}>
                    <img
                      className={`${cnFooter('list-telegram-img')}`}
                      src={mail}
                      alt="telegram"
                    />
                    <a href="mailto:info@elgrow.ru">
                      <span>info@elgrow.ru</span>
                    </a>
                  </button>
                </li>
              </div>
            </ul>
            <div className={cnFooter('wrapperCopyright')}>
              <div className={cnFooter('copyright')}>?? 2022 elgrow.</div>
            </div>
          </div>
          <div className={cnFooter('cities _anim-items')}>
            <div id="MSK" className={cnFooter('list-cityName _anim-items')}>
              <div
                onClick={() => {
                  pickCity('MSK', 'MSKStreet', 'icon1');
                }}
                className={`${cnFooter('list-cityName-button')}`}
              >
                <div>
                  <img
                    id="icon1"
                    className={`${cnFooter('list-cityName-location')}`}
                    src={locationIcon}
                  />
                  <span>{getTranslateTitle('????????????', 'Moscow')}</span>
                </div>

                <p
                  id="MSKStreet"
                  className={`${cnFooter('list-cityName-street')}`}
                >
                  {getTranslateTitle(
                    '????.????????????????????, ??.3, ??????.4, ???????? 103',
                    '3/4 Skladochnaya street, office 103'
                  )}
                </p>
              </div>
            </div>
            <div id="SPB" className={cnFooter('list-cityName _anim-items')}>
              <div
                onClick={() => pickCity('SPB', 'SPBStreet', 'icon2')}
                className={`${cnFooter('list-cityName-button')}`}
              >
                <div>
                  <img
                    id="icon2"
                    className={`${cnFooter('list-cityName-location')}`}
                    src={locationIcon}
                  />
                  <span>
                    {getTranslateTitle('??????????-??????????????????', 'St. Petersburg')}
                  </span>
                </div>

                <p
                  id="SPBStreet"
                  className={`${cnFooter('list-cityName-street')}`}
                >
                  {getTranslateTitle(
                    '????.??????????????????????????, ??.4??, ??????????.47-??, ???????? 6',
                    '4a Zelenogorskaya street, room 47-n, office 6'
                  )}
                </p>
              </div>
            </div>
            <div
              id="EKB"
              onClick={() => pickCity('EKB', 'EKBStreet', 'icon3')}
              className={cnFooter('list-cityName _anim-items')}
            >
              <div className={`${cnFooter('list-cityName-button')}`}>
                <div>
                  <img
                    id="icon3"
                    className={`${cnFooter('list-cityName-location')}`}
                    src={locationIcon}
                  />
                  <span>
                    {getTranslateTitle('????????????????????????', 'Yekaterinburg')}
                  </span>
                </div>
                <p
                  id="EKBStreet"
                  className={`${cnFooter('list-cityName-street')}`}
                >
                  {getTranslateTitle(
                    '????.????????????-????????????????, ??????.145, ???????? 2112',
                    'Mamin-Sibiryaka street, building 145, office 2112'
                  )}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </YMaps>
  );
};
