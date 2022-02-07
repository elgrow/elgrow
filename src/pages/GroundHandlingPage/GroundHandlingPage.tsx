import { cn } from '@bem-react/classname';
import { FC } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Menu } from '../../components/Menu/Menu';
import { ProjectFooter } from '../../components/ProjectFooter/ProjectFooter';
import { ProjectHeader } from '../../components/ProjectHeader/ProjectHeader';
import { ProjectTextBig } from '../../components/ProjectTextBig/ProjectTextBig';
import { ProjectTextHard } from '../../components/ProjectTextHard/ProjectTextHard';
import { ProjectTextMedium } from '../../components/ProjectTextMedium/ProjectTextMedium';
import { ProjectTextSmall } from '../../components/ProjectTextSmall/ProjectTextSmall';
import { TitleH4 } from '../../components/TitleH4/TitleH4';
import { DataProjectProps } from '../../components/type';

import './GroundHandlingPage.scss';

const cnGroundHandling = cn('GroundHandling');

export const GroundHandlingPage: FC<DataProjectProps> = ({ data }) => {
  return (
    <div className={cnGroundHandling()}>
      <div className={cnGroundHandling('menu-back')}>
        <Menu />
      </div>
      <ProjectHeader heading={data[0].heading} />
      <section className={cnGroundHandling('section')}>
        <div className={cnGroundHandling('white')}>
          <div className={cnGroundHandling('background-white')}>
            <div className={cnGroundHandling('background-white-heating')}>
              <img src={data[0].img} alt="heating" />
            </div>
            <Parallax speed={-6}>
              <div className={cnGroundHandling('background-white-tasks')}>
                <img src={data[0].imgMedium} alt="tasks" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnGroundHandling('center')}>
          <div
            className={`${cnGroundHandling('section-flex')} ${cnGroundHandling(
              `section-flex-${data[0].id}`
            )}`}
          >
            <div className={cnGroundHandling('section-block-left')}>
              <ProjectTextBig text={data[0].textBig} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnGroundHandling('section')}>
        <div className={cnGroundHandling('black')}>
          <div className={cnGroundHandling('background-black')}>
            <div className={cnGroundHandling('background-black-create-request')}>
              <img src={data[1].img} alt="create request" />
            </div>
            <Parallax translateX={['-400px', '50px']}>
              <div className={cnGroundHandling('background-black-subscribe')}>
                <img src={data[1].imgMedium} alt="subscribe" />
              </div>
              <div className={cnGroundHandling('background-black-dispatcher-changed')}>
                <img src={data[1].imgMedium2} alt="dispatcher changed" />
              </div>
              <div className={cnGroundHandling('background-black-dispatcher-canceled')}>
                <img src={data[1].imgMedium3} alt="dispatcher canceled" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnGroundHandling('center')}>
          <div
            className={`${cnGroundHandling('section-flex')} ${cnGroundHandling(
              `section-flex-${data[1].id}`
            )}`}
          >
            <div className={cnGroundHandling('section-block-left')}>
              <TitleH4 title={data[1].title} />
            </div>
            <div className={cnGroundHandling('section-block')}>
              <ProjectTextHard text={data[1].textHard} />
              <ProjectTextMedium text={data[1].textMedium} />
              <ProjectTextMedium text={data[1].textMedium2} />
              <ProjectTextMedium text={data[1].textMedium3} />
              <div className={cnGroundHandling(`border-icon`)}>
                <img className={cnGroundHandling('icon')} src={data[1].icon} alt="menu" />
                <ProjectTextSmall text={data[1].textSmall} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cnGroundHandling('section')}>
        <div className={cnGroundHandling('black')}>
          <div className={cnGroundHandling('background-black')}>
            <div className={cnGroundHandling('background-black-history')}>
              <img src={data[2].img} alt="history" />
            </div>
            <div className={cnGroundHandling('background-black-history2')}>
              <img src={data[2].img2} alt="history" />
            </div>
            <Parallax speed={10}>
              <div className={cnGroundHandling('background-black-cancel')}>
                <img src={data[2].imgMedium} alt="cancel" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnGroundHandling('center')}>
          <div
            className={`${cnGroundHandling('section-flex')} ${cnGroundHandling(
              `section-flex-${data[2].id}`
            )}`}
          >
            <div className={cnGroundHandling('section-block-left')}>
              <TitleH4 title={data[2].title} />
            </div>
            <div className={cnGroundHandling('section-block')}>
              <ProjectTextHard text={data[2].textHard} />
              <ProjectTextMedium text={data[2].textMedium} />
              <ProjectTextMedium text={data[2].textMedium2} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${cnGroundHandling('section')} ${cnGroundHandling(`section-${data[3].id}`)}`}
      >
        <div className={cnGroundHandling('320phone-screens')}>
          <div className={cnGroundHandling('320phone-screens-tasks')}>
            <img src={data[4].imgMedium} alt="tasks" />
          </div>
          <div className={cnGroundHandling('320phone-screens-create')}>
            <img src={data[4].imgMedium2} alt="create" />
          </div>
        </div>
        <div className={cnGroundHandling('center')}>
          <div
            className={`${cnGroundHandling('section-flex')} ${cnGroundHandling(
              `section-flex-${data[3].id}`
            )}`}
          >
            <div className={cnGroundHandling('section-block-left')}>
              <TitleH4 title={data[3].title} />
            </div>
            <div
              className={`${cnGroundHandling('section-block')} ${cnGroundHandling(
                `section-block-${data[3].id}`
              )}`}
            >
              <ProjectTextHard text={data[3].textHard} />
              <ProjectTextMedium text={data[3].textMedium} />
              <ProjectTextMedium text={data[3].textMedium2} />
              <ProjectTextMedium text={data[3].textMedium3} />
              <ProjectTextMedium text={data[3].textMedium4} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${cnGroundHandling('section')} ${cnGroundHandling(`section-${data[3].id}`)}`}
      >
        <div className={cnGroundHandling('phone-screens')}>
          <Parallax speed={-10}>
            <div className={cnGroundHandling('phone-screens-block-1')}>
              <div className={cnGroundHandling('phone-screens-VQBIG-left')}>
                <img src={data[4].imgMedium5} alt="VQBIG" />
              </div>
              <div className={cnGroundHandling('phone-screens-power-left')}>
                <img src={data[4].imgMedium6} alt="power" />
              </div>
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <div className={cnGroundHandling('phone-screens-block-2')}>
              <div className={cnGroundHandling('phone-screens-create')}>
                <img src={data[4].imgMedium2} alt="create" />
              </div>
              <div className={cnGroundHandling('phone-screens-tasks')}>
                <img src={data[4].imgMedium} alt="tasks" />
              </div>
            </div>
          </Parallax>
          <div className={cnGroundHandling('phone-screens-block-3')}>
            <div className={cnGroundHandling('phone-screens-processing')}>
              <img src={data[4].imgMedium3} alt="processing" />
            </div>
            <div className={cnGroundHandling('phone-screens-atWork')}>
              <img src={data[4].imgMedium4} alt="atWork" />
            </div>
          </div>
          <div className={cnGroundHandling('phone-screens-block-4')}>
            <div className={cnGroundHandling('phone-screens-VQBIG')}>
              <img src={data[4].imgMedium5} alt="VQBIG" />
            </div>
            <div className={cnGroundHandling('phone-screens-power')}>
              <img src={data[4].imgMedium6} alt="power" />
            </div>
          </div>
        </div>
        <div
          className={`${cnGroundHandling('320phone-screens')} ${cnGroundHandling(
            `320phone-screens-${data[4].id}`
          )}`}
        >
          <div className={cnGroundHandling('320phone-screens-processing')}>
            <img src={data[4].imgMedium3} alt="processing" />
          </div>
          <div className={cnGroundHandling('320phone-screens-atWork')}>
            <img src={data[4].imgMedium4} alt="atWork" />
          </div>
        </div>
        <div className={cnGroundHandling('center')}>
          <div
            className={`${cnGroundHandling('section-flex')} ${cnGroundHandling(
              `section-flex-${data[4].id}`
            )}`}
          >
            <div
              className={`${cnGroundHandling('section-block-left')} ${cnGroundHandling(
                `section-block-left-${data[4].id}`
              )}`}
            ></div>
            <div className={cnGroundHandling('section-block')}>
              <ProjectTextMedium text={data[4].textMedium} />
              <ProjectTextMedium text={data[4].textMedium2} />
              <ProjectTextMedium text={data[4].textMedium3} />
              <ProjectTextMedium text={data[4].textMedium4} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${cnGroundHandling('section')} ${cnGroundHandling(`section-${data[5].id}`)}`}
      >
        <div className={cnGroundHandling('center')}>
          <div
            className={`${cnGroundHandling('section-flex')} ${cnGroundHandling(
              `section-flex-${data[5].id}`
            )}`}
          >
            <div className={cnGroundHandling('section-block-left')}></div>
            <div className={cnGroundHandling('section-block')}>
              <div className={cnGroundHandling('phone-wrapper')}>
                <div className={cnGroundHandling('phone-wrapper-started')}>
                  <img src={data[5].img} alt="started" />
                </div>
                <div className={cnGroundHandling('phone-wrapper-signature')}>
                  <img src={data[5].img2} alt="signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cnGroundHandling('center')}>
          <div
            className={`${cnGroundHandling('section-flex')} ${cnGroundHandling(
              `section-flex-${data[6].id}`
            )}`}
          >
            <div className={cnGroundHandling('section-block-left')}></div>
            <div className={cnGroundHandling('section-block')}>
              <ProjectTextMedium text={data[5].textMedium} />
              <ProjectTextMedium text={data[5].textMedium2} />
              <ProjectTextMedium text={data[5].textMedium3} />
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter title={data[6].title} id={data[6].id} url={data[6].url} />
    </div>
  );
};
