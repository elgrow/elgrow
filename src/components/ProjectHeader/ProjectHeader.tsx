import { cn } from '@bem-react/classname';
import { FC } from 'react';
import { DataProject } from '../type';

import { TitleH3 } from '../TitleH3/TitleH3';
import points from '../../assets/images/points.svg';

import './ProjectHeader.scss';

const cnProjectHeader = cn('ProjectHeader');

export const ProjectHeader: FC<DataProject> = ({ heading }) => {
  return (
    <div className={cnProjectHeader()}>
      <div className={cnProjectHeader('wrapper')}>
        <TitleH3 title={heading} />
      </div>
      <div className={cnProjectHeader('container')}>
        <div className={cnProjectHeader('block-left')}>
          <p className={cnProjectHeader('title')}>Клиент:</p>
          <div className={cnProjectHeader('utg-group')}>
            <p className={cnProjectHeader('text')}>UTG Group</p>
            <img className={cnProjectHeader('points')} src={points} alt="icon"></img>
          </div>
        </div>
        <div className={cnProjectHeader('block')}>
          <p className={cnProjectHeader('title')}>Сделано:</p>
          <p className={cnProjectHeader('text', {length: 'small'})}>UX/UI design, frontend, backend</p>
        </div>
      </div>
    </div>
  );
};
