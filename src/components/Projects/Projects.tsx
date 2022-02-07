import { cn } from '@bem-react/classname';
import { FC, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { getProjectsData } from '../../store/actions';
import { ProjectsImage } from '../ProjectsImage/ProjectsImage';
import { ProjectTask } from '../ProjectTask/ProjectTask';
import { ProjectsProps } from '../type';

import './Projects.scss';

const cnProjects = cn('Projects');

export const Projects: FC<ProjectsProps> = ({ data }) => {
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
      {data.map((card) => (
        <div key={card._id} className={cnProjects(`container_${card._id}`)} >
          <div className={cnProjects(`image_${card._id}`)}>
            <ProjectsImage _id={card._id} task={''} url={card.url} img={card.img} development={''} text={''} />
          </div>
          <div className={cnProjects(`content_${card._id}`)}>
            <ProjectTask _id={card._id} task={card.task} url={card.url} img={''} development={''} text={''} />
            <p className={`${cnProjects('text')} ${cnProjects(`content_${card._id}-text`)}`}>
              {card.text}
            </p>
            <p
              className={`${cnProjects('development')} ${cnProjects(
                `content_${card._id}-development`
              )}`}
            >
              {card.development}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
