import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './TitleH4.scss';

const cnTitleH4 = cn('TitleH4');

export const TitleH4: FC<DataProject> = ({ title, id }) => {
  return <h4 className={`${cnTitleH4()} `}>{title}</h4>;
};
