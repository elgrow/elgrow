import { cn } from '@bem-react/classname';
import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { getProjectsData } from '../../store/actions';
import ProjectObject from '../ProjectObject/ProjectObject';
import { ProjectsImage } from '../ProjectsImage/ProjectsImage';
import { ProjectTask } from '../ProjectTask/ProjectTask';
import { ProjectsProps } from '../type';

import './Projects.scss';

export const Projects: FC<ProjectsProps> = ({ data }) => {
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
        window.addEventListener('scroll', () => animOnScroll(animItems));
        animOnScroll(animItems);
      }
    }
  }, [ref]);
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

  const getTranslateTitle = (ru: string, en: string) => {
    let lang = localStorage.getItem('language');
    if (lang === 'En') {
      return en;
    } else return ru;
  };

  return (
    <section id="projects" className={cnProjects()} onClick={onAddressClick}>
      <h2 className={cnProjects('title _anim-items')}>
        {getTranslateTitle('Продукты', 'Products')}
      </h2>
      {data.map(card => (
        <ProjectObject card={card} />
      ))}
    </section>
  );
};
