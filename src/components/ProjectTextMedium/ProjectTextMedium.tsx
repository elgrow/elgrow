import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './ProjectTextMedium.scss';

const cnProjectTextMedium = cn('ProjectTextMedium');

export const ProjectTextMedium: FC<DataProject> = ({ text, id }) => {
  return <p className={`${cnProjectTextMedium()} ${cnProjectTextMedium(`${id}`)}`}>{text}</p>;
};
