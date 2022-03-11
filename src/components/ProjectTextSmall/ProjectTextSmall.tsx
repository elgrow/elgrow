import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './ProjectTextSmall.scss';

const cnProjectTextSmall = cn('ProjectTextSmall');

export const ProjectTextSmall: FC<DataProject> = ({ text, id, prefix }) => {
  return (
    <p className={`${cnProjectTextSmall()} ${cnProjectTextSmall(`${id}`)}`}>
      {prefix} {text}
    </p>
  );
};
