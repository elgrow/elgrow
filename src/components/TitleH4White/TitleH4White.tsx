import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './TitleH4White.scss';

export const TitleH4White: FC<DataProject> = ({ title, id }) => {
  const cnTitleH4White = cn('TitleH4White');
  return <h4 className={`${cnTitleH4White()} `}>{title}</h4>;
};
