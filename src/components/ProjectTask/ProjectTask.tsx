import { cn } from '@bem-react/classname';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProjectsData } from '../type';

import './ProjectTask.scss';

const cnProjectTask = cn('ProjectTask');

export const ProjectTask: FC<ProjectsData> = ({ _id, task, url }) => {
  return (
    <div className={`${cnProjectTask()}`}>
      <button
        className={`${cnProjectTask('button')} ${cnProjectTask(`button`)}`}
      >
        {/* <a className={`${cnProjectTask('text')} ${cnProjectTask(`text-${_id}`)}`} target={'_blank'} href={url}>{task}</a> */}
        <div
          // to={url}
          className={`${cnProjectTask('text')} ${cnProjectTask(`text-${_id}`)}`}
        >
          {task}
        </div>
      </button>
    </div>
  );
};
