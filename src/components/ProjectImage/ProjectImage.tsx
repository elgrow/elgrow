import { cn } from '@bem-react/classname';
import { FC } from 'react';

import { DataProject } from '../type';

import './ProjectImage.scss';

const cnProjectImage = cn('ProjectImage');

export const ProjectImage: FC<DataProject> = ({ img, id }) => {
  return (
    <div className={`${cnProjectImage()} ${cnProjectImage(`${id}`)}`} >
      <img className={cnProjectImage('image')} src={img} alt=""></img>
    </div>
  );
};
