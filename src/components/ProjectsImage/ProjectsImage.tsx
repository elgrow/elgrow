import { cn } from '@bem-react/classname';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ProjectsData } from '../type';

import './ProjectsImage.scss';

const cnProjectsImage = cn('ProjectsImage');

export const ProjectsImage: FC<ProjectsData> = ({ _id, img, url }) => {
  return (
    <div className={`${cnProjectsImage()} ${cnProjectsImage(`${_id}`)}`}>
      <Link to={url}>
        <img src={img} alt="project" />
      </Link>
    </div>
  );
};
