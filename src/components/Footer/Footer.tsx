import { cn } from '@bem-react/classname';

import telegram from '../../assets/images/telegram.png';

import './Footer.scss';

const cnFooter = cn('Footer');

export const Footer = () => {
  return (
    <footer id="contacts" className={cnFooter()}>
      <h2 className={cnFooter('title')}>Контакты</h2>
      <div className={cnFooter('container')}>
        <ul className={cnFooter('list')}>
          <li className={cnFooter('list-mail')}>
            <button className={`${cnFooter('list-mail-button')}`}>
              <a href="mailto:dmitry@elgrow.ru">
                <span>dmitry@elgrow.ru</span>
              </a>
            </button>
          </li>
          <li className={cnFooter('list-phone')}>
            <button className={`${cnFooter('list-phone-button')}`}>
              <a href="tel:+79221521563">+ 7 343 938 99 49</a>
            </button>
          </li>
        </ul>
        <ul className={cnFooter('list')}>
          <li className={`${cnFooter('list-telegram')}`}>
            <button className={`${cnFooter('list-telegram-button')}`}>
              <img className={`${cnFooter('list-telegram-img')}`} src={telegram} alt="telegram" />
              <span className={`${cnFooter('list-telegram-text')}`}>
                <a href="https://t.me/@DC6200">Связаться в Telegram</a>
              </span>
            </button>
          </li>
        </ul>
      </div>
      <p className={cnFooter('copyright')}>© 2022 elgrow.</p>
    </footer>
  );
};
