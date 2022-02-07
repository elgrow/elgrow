import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './ProjectTextSmall.scss';

const cnProjectTextSmall = cn('ProjectTextSmall');

export const ProjectTextSmall: FC<DataProject> = ({ text, id }) => {
  return <p className={`${cnProjectTextSmall()} ${cnProjectTextSmall(`${id}`)}`}>{text}</p>;
};
