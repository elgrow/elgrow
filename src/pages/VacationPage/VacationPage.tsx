import { cn } from '@bem-react/classname';
import { FC } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Animated } from "react-animated-css"

import { Menu } from '../../components/Menu/Menu';
import { ProjectFooter } from '../../components/ProjectFooter/ProjectFooter';
import { ProjectHeader } from '../../components/ProjectHeader/ProjectHeader';
import { ProjectImage } from '../../components/ProjectImage/ProjectImage';
import { ProjectTextBig } from '../../components/ProjectTextBig/ProjectTextBig';
import { ProjectTextHard } from '../../components/ProjectTextHard/ProjectTextHard';
import { ProjectTextMedium } from '../../components/ProjectTextMedium/ProjectTextMedium';
import { TitleH4 } from '../../components/TitleH4/TitleH4';
import { DataProjectProps } from '../../components/type';

import './VacationPage.scss';

const cnVacationPage = cn('VacationPage');

export const VacationPage: FC<DataProjectProps> = ({ data }) => {
  return (
    <div className={cnVacationPage()}>
      <div className={cnVacationPage('menu-back')}>
        <Menu />
      </div>
      <ProjectHeader heading={data[0].heading} />
      <section className={cnVacationPage('section')}>
        <div className={cnVacationPage('white')}>
          <div className={cnVacationPage('background-white')}>
            <ProjectImage img={data[0].img} id={data[0].id} />
          </div>
        </div>
        <div className={cnVacationPage('center')}>
          <div
            className={`${cnVacationPage('section-flex')} ${cnVacationPage(
              `section-flex-${data[0].id}`
            )}`}
          >
            <ProjectTextBig text={data[0].textBig} id={data[0].id} />
          </div>
        </div>
      </section>
      <section
        className={`${cnVacationPage('section')} ${cnVacationPage(`section-${data[1].id}`)}`}
      >
        <div className={cnVacationPage('black')}>
          <div className={cnVacationPage('background-black')}>
            <div className={cnVacationPage('background-black-userVacation')}>
              <img src={data[1].img} />
            </div>
            <Parallax speed={10}>
              <div className={cnVacationPage('background-black-nextYear')}>
                <img src={data[1].imgMedium3} />
              </div>
            </Parallax>
            <Parallax speed={-5}>
              <div className={cnVacationPage('background-black-unscheduled')}>
                <img src={data[1].imgMedium} />
              </div>
            </Parallax>
            <Parallax speed={-5}>
              <div className={cnVacationPage('background-black-september')}>
                <img src={data[1].imgMedium2} />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnVacationPage('title-wrapper')}>
          <TitleH4 title={data[1].title} id={data[1].id} />
        </div>
        <div className={cnVacationPage('center')}>
          <div
            className={`${cnVacationPage('section-flex')} ${cnVacationPage(
              `section-flex-${data[1].id}`
            )}`}
          >
            <div className={cnVacationPage('section-block-left')}>
              <ProjectTextHard text={data[1].textHard} id={data[1].id} />
            </div>
            <div className={cnVacationPage('section-block')}>
              <ProjectTextMedium text={data[1].textMedium} id={data[1].id} />
              <ProjectTextMedium text={data[1].textMedium2} id={data[1].id} />
              <ProjectTextMedium text={data[1].textMedium3} id={data[1].id} />
              <ProjectTextMedium text={data[1].textMedium4} id={data[1].id} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnVacationPage('section')}>
        <div className={cnVacationPage('image-wrapper')}>
          <div className={cnVacationPage('background-white-applications')}>
            <img src={data[2].img} alt="applications" />
          </div>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <div className={`${cnVacationPage('background-black-print')} element-animation`}>
              <img src={data[2].imgMedium} />
          </div>
          </Animated>
          <div className={`${cnVacationPage('background-black-reminder')} element-animation`}>
              <img src={data[2].imgMedium2} />
          </div>
        </div>
        <div className={cnVacationPage('center')}>
          <div
            className={`${cnVacationPage('section-flex')} ${cnVacationPage(
              `section-flex-${data[2].id}`
            )}`}
          >
            <div className={cnVacationPage('section-block-left')}>
              <ProjectTextHard text={data[2].textHard} id={data[2].id} />
            </div>
            <div className={cnVacationPage('section-block')}>
              <ProjectTextMedium text={data[2].textMedium} id={data[2].id} />
              <ProjectTextMedium text={data[2].textMedium2} id={data[2].id} />
            </div>
            <div className={`${cnVacationPage('section-block-left')} element-animation`}>
              <ProjectTextHard text={data[2].textHard2} id={data[2].id} />
            </div>
            <div className={`${cnVacationPage('section-block')} element-animation`}>
              <ProjectTextMedium text={data[2].textMedium3} id={data[2].id} />
            </div>
            <div className={cnVacationPage('background-black-320reminder')}>
              <img src={data[2].imgMedium2} />
            </div>
            <div className={`${cnVacationPage('section-block-left')} element-animation`}>
              <ProjectTextHard text={data[2].textHard3} id={data[2].id} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnVacationPage('section')}>
        <div className={cnVacationPage('black')}>
          <div className={cnVacationPage('background-black')}>
            <div className={cnVacationPage('background-black-plan')}>
              <img src={data[3].img} />
            </div>
            <Parallax speed={-10}>
              <div className={cnVacationPage('background-black-plan-check')}>
                <img src={data[3].imgMedium} />
              </div>
              <div className={cnVacationPage('background-black-plan-go-over')}>
                <img src={data[3].imgMedium2} />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnVacationPage('title-wrapper')}>
          <TitleH4 title={data[3].title} id={data[3].id} />
        </div>
        <div className={cnVacationPage('center')}>
          <div
            className={`${cnVacationPage('section-flex')} ${cnVacationPage(
              `section-flex-${data[3].id}`
            )}`}
          >
            <div
              className={`${cnVacationPage('section-block-left')} ${cnVacationPage(
                `section-block-left-${data[3].id}`
              )}`}
            >
              <ProjectTextHard text={data[3].textHard} id={data[3].id} />
            </div>
            <div className={cnVacationPage('section-block')}>
              <ProjectTextMedium text={data[3].textMedium} id={data[3].id} />
              <ProjectTextMedium text={data[3].textMedium2} id={data[3].id} />
              <ProjectTextMedium text={data[3].textMedium3} id={data[3].id} />
            </div>
          </div>
        </div>
        <div
          className={`${cnVacationPage('image-wrapper')} ${cnVacationPage(
            `image-wrapper-${data[3].id}`
          )}`}
        >
          <ProjectImage img={data[3].img2} id={data[3].id} />
          <Parallax speed={-10}>
            <div className={cnVacationPage('image-wrapper-next-year')}>
              <img src={data[3].imgMedium3} />
            </div>
          </Parallax>
        </div>
        <div className={cnVacationPage('image-320wrapper')}>
          <ProjectImage img={data[3].imgMedium3} id={data[3].id} />
        </div>
        <div className={`${cnVacationPage('center')} ${cnVacationPage(`center-${data[3].id}`)}`}>
          <div
            className={`${cnVacationPage('section-flex')} ${cnVacationPage(
              `section-flex-${data[3].id}`
            )}`}
          >
            <div className={cnVacationPage('section-block-left')}></div>
            <div className={cnVacationPage('section-block')}>
              <ProjectTextMedium text={data[3].textMedium4} id={data[3].id} />
              <ProjectTextMedium text={data[3].textMedium5} id={data[3].id} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnVacationPage('section')}>
        <div className={cnVacationPage('black')}>
          <div className={cnVacationPage('background-black')}>
            <div className={cnVacationPage('background-black-applications-blackout')}>
              <img src={data[4].img} />
            </div>
            <Parallax speed={-10}>
              <div className={cnVacationPage('background-black-planning')}>
                <img src={data[4].imgMedium} />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnVacationPage('title-wrapper')}>
          <TitleH4 title={data[4].title} id={data[4].id} />
        </div>
        <div className={`${cnVacationPage('center')} ${cnVacationPage(`center-${data[4].id}`)}`}>
          <div
            className={`${cnVacationPage('section-flex')} ${cnVacationPage(
              `section-flex-${data[4].id}`
            )}`}
          >
            <div className={cnVacationPage('section-block-left')}>
              <ProjectTextHard text={data[4].textHard} id={data[4].id} />
            </div>
            <div className={cnVacationPage('section-block')}>
              <ProjectTextMedium text={data[4].textMedium} id={data[4].id} />
              <ProjectTextMedium text={data[4].textMedium2} id={data[4].id} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${cnVacationPage('section')} ${cnVacationPage(`section-${data[5].id}`)}`}
      >
        <div className={cnVacationPage('black')}>
          <div className={cnVacationPage('background-black')}>
            <div className={cnVacationPage('background-black-hr')}>
              <img src={data[5].img} />
            </div>
            <Parallax speed={-8}>
              <div className={cnVacationPage('background-black-prohibition')}>
                <img src={data[5].imgMedium} />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnVacationPage('title-wrapper')}>
          <TitleH4 title={data[5].title} id={data[5].id} />
        </div>
        <div className={cnVacationPage('center')}>
          <div
            className={`${cnVacationPage('section-flex')} ${cnVacationPage(
              `section-flex-${data[5].id}`
            )}`}
          >
            <div className={cnVacationPage('section-block-left')}>
              <ProjectTextHard text={data[5].textHard} id={data[5].id} />
            </div>
            <div className={cnVacationPage('section-block')}>
              <ProjectTextMedium text={data[5].textMedium} id={data[5].id} />
              <ProjectTextMedium text={data[5].textMedium2} id={data[5].id} />
              <ProjectTextMedium text={data[5].textMedium3} id={data[5].id} />
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter title={data[6].title} id={data[6].id} url={data[6].url} />
    </div>
  );
};
