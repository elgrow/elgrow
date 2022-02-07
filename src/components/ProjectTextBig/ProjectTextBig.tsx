import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './ProjectTextBig.scss';

const cnProjectTextBig = cn('ProjectTextBig');

export const ProjectTextBig: FC<DataProject> = ({ text, id }) => {
  return <p className={`${cnProjectTextBig()} ${cnProjectTextBig(`${id}`)}`}>{text}</p>;
};
