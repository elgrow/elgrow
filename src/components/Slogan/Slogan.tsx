import { cn } from '@bem-react/classname';

import './Slogan.scss';

const cnSlogan = cn('Slogan');

export const Slogan = () => {
  return (
    <section className={cnSlogan()}>
      <p className={cnSlogan('line1')}>Ведем от UX до UI,</p>
      <p className={cnSlogan('line2')}>
        рубим front<span> не топором,</span>
      </p>
      <p className={cnSlogan('line3')}>копаем back до золота</p>
      <p className={cnSlogan('line4')}>и тестируем,</p>
      <p className={cnSlogan('line5')}>как космонавтов</p>
    </section>
  );
};
