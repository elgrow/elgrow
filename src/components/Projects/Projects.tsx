import { cn } from '@bem-react/classname';
import { FC, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { getProjectsData } from '../../store/actions';
import ProjectObject from '../ProjectObject/ProjectObject';
import { ProjectsImage } from '../ProjectsImage/ProjectsImage';
import { ProjectTask } from '../ProjectTask/ProjectTask';
import { ProjectsProps } from '../type';

import './Projects.scss';

export const Projects: FC<ProjectsProps> = ({ data }) => {
  const cnProjects = cn('Projects');
  const projectsData = useMemo(
    () => ({
      _id: 0,
      img: '',
      text: '',
      development: '',
      task: '',
      url: '',
    }),
    []
  );

  const dispatch = useDispatch();

  const onAddressClick = useCallback(() => {
    dispatch(getProjectsData(projectsData));
  }, [dispatch, projectsData]);

  return (
    <section id="projects" className={cnProjects()} onClick={onAddressClick}>
      <h2 className={cnProjects('title')}>Продукты</h2>
      {data.map(card => (
        <ProjectObject card={card} />
      ))}
    </section>
  );
};
