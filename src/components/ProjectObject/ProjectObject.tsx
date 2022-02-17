import { cn } from '@bem-react/classname';
import { FC, useEffect, useRef, useState } from 'react';
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
  const ref = useRef(null);
  const cnProjects = cn('Projects');

  const animOnScroll = (animItems: any) => {
    for (let index = 0; index < animItems.length; index++) {
      const animItem: any = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim_no_hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
    function offset(el: any) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  };

  useEffect(() => {
    if (ref.current) {
      const animItems = document.querySelectorAll('._anim-items');
      if (animItems.length > 0) {
        console.log(animItems);
        window.addEventListener('scroll', () => animOnScroll(animItems));
        animOnScroll(animItems);
      }
    }
  }, [ref]);

  const imageMove = (e: any) => {
    let elem = e.currentTarget;
    let image = elem.querySelector('img');
    const width = window.innerWidth;
    const y = e.clientY;

    if (width < 768) {
      return;
    } else image.style.top = `${y - 200}px`;
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

  return (
    <Link to={card.url} style={{ textDecoration: 'none', color: '#424D5E' }}>
      <div
        key={card._id}
        className={cnProjects(`container _anim-items`)}
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
