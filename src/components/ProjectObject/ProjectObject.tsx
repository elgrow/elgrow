import { cn } from '@bem-react/classname';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { ProjectsImage } from '../ProjectsImage/ProjectsImage';
import { ProjectTask } from '../ProjectTask/ProjectTask';

interface Project {
  _id: number;
  img: string;
  text: string;
  development: string;
  task: string;
  url: string;
}

const ProjectObject: React.FC<Project & any> = ({ card }) => {
  const cnProjects = cn('Projects');

  const imageMove = (e: any) => {
    let elem = e.currentTarget;
    let image = elem.querySelector('img');
    const width = window.innerWidth;
    const y = e.clientY;

    if (width < 768) {
      return;
    } else image.style.top = `${y}px`;
    image.style.opacity = 1;
  };

  const dontHiddenImage = (e: any) => {
    let y = e.clientY;
    y++;
  };

  const imageOut = (e: any) => {
    const width = window.innerWidth;
    let parent = e.currentTarget;
    let image = parent.querySelector('img');
    if (width < 768) {
      return;
    } else image.style.opacity = 0;
  };

  // const showImage = (e: any, opacity: number, pos: string) => {
  //   const elem = e.target;
  //   elem.style.opacity = opacity;
  //   elem.style.position = pos;
  // };
  // const hiddenImage = (e: any) => {
  //   const image = e.target;
  //   image.style.opacity = 0;
  //   image.style.top = null;
  // };

  return (
    <Link to={card.url} style={{ textDecoration: 'none', color: '#424D5E' }}>
      <div
        key={card._id}
        className={cnProjects(`container`)}
        onMouseOut={e => imageOut(e)}
        onMouseMove={e => imageMove(e)}
        onWheel={e => dontHiddenImage(e)}
      >
        <div className={cnProjects(`wrapperForMobile`)}>
          <div className={cnProjects(`content`)}>
            <ProjectTask
              _id={card._id}
              task={card.task}
              url={card.url}
              img={''}
              development={''}
              text={''}
            />
          </div>

          <div className={cnProjects(`image_${card._id}`)}>
            <ProjectsImage
              _id={card._id}
              task={''}
              url={card.url}
              img={card.img}
              development={''}
              text={''}
            />
          </div>

          <p className={`${cnProjects('text')}`}>{card.text}</p>
          <p className={`${cnProjects('development')}`}>{card.development}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectObject;
