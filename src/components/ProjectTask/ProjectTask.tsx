import { cn } from '@bem-react/classname';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProjectsData } from '../type';

import './ProjectTask.scss';

const cnProjectTask = cn('ProjectTask');

export const ProjectTask: FC<ProjectsData> = ({ _id, task, url }) => {

  return (
    <div className={`${cnProjectTask()} ${cnProjectTask(`${_id}`)}`} >
      <button className={`${cnProjectTask('button')} ${cnProjectTask(`button-${_id}`)}`} >
        {/* <a className={`${cnProjectTask('text')} ${cnProjectTask(`text-${_id}`)}`} target={'_blank'} href={url}>{task}</a> */}
        <Link to={url} className={`${cnProjectTask('text')} ${cnProjectTask(`text-${_id}`)}`}>{task}</Link>
      </button>
    </div>
  );
};
