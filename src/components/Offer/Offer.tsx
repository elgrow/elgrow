import { cn } from '@bem-react/classname';

import telegram from '../../assets/images/telegram.png';

import './Offer.scss';

export const Offer = () => {
  const cnOffer = cn('Offer');
  return (
    <section className={cnOffer()}>
      <div className={cnOffer('link')}>
        <a href="/">
          <img className={cnOffer('link-img')} src={telegram} alt="telegram" />
          <span className={cnOffer('link-text')}>
            <a href="https://t.me/@DC6200">Связаться в Telegram</a>
          </span>
        </a>
      </div>
      <p className={cnOffer('text')}>
        Разработка мобильных и веб-приложений. CRM/ERP для бизнеса, а не
        наоборот
      </p>
    </section>
  );
};
