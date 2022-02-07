import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './ProjectTextHard.scss';

const cnProjectTextHard = cn('ProjectTextHard');

export const ProjectTextHard: FC<DataProject> = ({ text, id }) => {
  return <p className={`${cnProjectTextHard()} ${cnProjectTextHard(`${id}`)}`}>{text}</p>;
};
