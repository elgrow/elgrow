import { cn } from '@bem-react/classname';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { DataProject } from '../type';

import './ProjectFooter.scss';

const cnProjectFooter = cn('ProjectFooter');

export const ProjectFooter: FC<DataProject> = ({ url, title, id }) => {
  let newUrl: string;

  let lang = localStorage.getItem('language');

  !url ? (newUrl = '') : (newUrl = `/${lang}${url}`);

  const getTranslateTitle = (ru: string, en: string) => {
    let lang = localStorage.getItem('language');
    if (lang === 'en') {
      return en;
    } else return ru;
  };

  return (
    <div className={`${cnProjectFooter()} ${cnProjectFooter(`${id}`)}`}>
      <div className={cnProjectFooter('wrapper')}>
        <p className={cnProjectFooter('text')}>
          {getTranslateTitle('Смотреть другой проект', 'See another project')}
        </p>
        <Link className={cnProjectFooter('link')} to={newUrl}>
          <div className={cnProjectFooter('link-wrapper')}>
            <h3 className={cnProjectFooter('title')}>
              {title}
              <span className={cnProjectFooter('link-arrow')}></span>
            </h3>
          </div>
        </Link>

        <p className={cnProjectFooter('copyright')}>© 2022 elgrow.</p>
      </div>
    </div>
  );
};
