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

import './DisruptiveSituationsPage.scss';

const cnDisruptiveSituations = cn('DisruptiveSituations');

export const DisruptiveSituationsPage: FC<DataProjectProps> = ({ data }) => {
  return (
    <div className={cnDisruptiveSituations()}>
      <div className={cnDisruptiveSituations('menu-back')}>
        <Menu />
      </div>
      <ProjectHeader heading={data[0].heading} />
      <section className={cnDisruptiveSituations('section')}>
        <div className={cnDisruptiveSituations('white')}>
          <div
            className={`${cnDisruptiveSituations('background-white')} ${cnDisruptiveSituations(
              `background-white-${data[0].id}`
            )}`}
          >
            <Parallax speed={-10}>
              <div className={cnDisruptiveSituations('background-white-passenger')}>
                <img src={data[0].imgMedium2} alt="passenger" />
              </div>
            </Parallax>
            <div className={cnDisruptiveSituations('background-white-voucher')}>
              <img src={data[0].img} alt="voucher" />
            </div>
            <Parallax speed={10}>
              <div className={cnDisruptiveSituations('background-white-scanner')}>
                <img src={data[0].imgMedium} alt="scanner" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnDisruptiveSituations('center')}>
          <div
            className={`${cnDisruptiveSituations('section-flex')} ${cnDisruptiveSituations(
              `section-flex-${data[0].id}`
            )}`}
          >
            <div className={cnDisruptiveSituations('section-block-left')}>
              <ProjectTextBig text={data[0].textBig} />
            </div>
            <div className={cnDisruptiveSituations('section-block')}>
              <ProjectTextMedium text={data[0].textMedium} />
              <ProjectTextMedium text={data[0].textMedium2} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnDisruptiveSituations('section')}>
        <div className={cnDisruptiveSituations('white')}>
          <div className={cnDisruptiveSituations('background-white')}>
            <div className={cnDisruptiveSituations('background-white-transparent')}>
              <div className={cnDisruptiveSituations('background-white-application')}>
                <img src={data[1].img} alt="application" />
              </div>
            </div>
            <Parallax speed={8}>
              <div className={cnDisruptiveSituations('background-white-list')}>
                <img src={data[1].imgMedium} alt="list" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnDisruptiveSituations('background-white-registry')}>
                <img src={data[1].imgMedium2} alt="registry" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnDisruptiveSituations('background-white-listAction')}>
                <img src={data[1].imgMedium3} alt="listAction" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnDisruptiveSituations('title-wrapper')}>
          <TitleH4 title={data[1].title} id={data[1].id} />
        </div>
        <div className={cnDisruptiveSituations('center')}>
          <div
            className={`${cnDisruptiveSituations('section-flex')} ${cnDisruptiveSituations(
              `section-flex-${data[1].id}`
            )}`}
          >
            <div
              className={`${cnDisruptiveSituations('section-block-left')} ${cnDisruptiveSituations(
                `section-block-left-${data[1].id}`
              )}`}
            >
              <div className={cnDisruptiveSituations('section-block-left-flight-number')}>
                <img src={data[1].img2} alt="flight number" />
              </div>
              <Parallax speed={-15}>
                <div className={cnDisruptiveSituations('section-block-left-print')}>
                  <img src={data[1].imgMedium4} alt="print" />
                </div>
              </Parallax>
            </div>
            <div className={cnDisruptiveSituations('section-block')}>
              <ProjectTextHard text={data[1].textHard} />
              <ProjectTextMedium text={data[1].ul} />
              <ul className={cnDisruptiveSituations('section-block-list')}>
                <li>
                  <ProjectTextMedium text={data[1].li1} />
                </li>
                <li>
                  <ProjectTextMedium text={data[1].li2} />
                </li>
                <li>
                  <ProjectTextMedium text={data[1].li3} />
                </li>
              </ul>
              <div className={cnDisruptiveSituations('section-block-320flight-number')}>
                <img src={data[1].imgMedium5} alt="flight number" />
                <div className={cnDisruptiveSituations('section-block-320print')}>
                  <img src={data[1].imgMedium4} alt="print" />
                </div>
              </div>

              <ProjectTextHard text={data[1].textHard2} />
              <ProjectTextMedium text={data[1].textMedium} />
              <ProjectTextMedium text={data[1].textMedium2} />
              <ProjectTextMedium text={data[1].textMedium3} />
              <ProjectTextMedium text={data[1].textMedium4} />
              <div
                className={`${cnDisruptiveSituations('border-icon')} ${cnDisruptiveSituations(
                  `border-icon-${data[1].id}`
                )}`}
              >
                <img
                  className={cnDisruptiveSituations('icon')}
                  src={data[1].icon}
                  alt="documents"
                />
                <ProjectTextSmall text={data[1].textSmall} />
              </div>
              <div className={cnDisruptiveSituations(`border-icon-${data[1].id}`)}>
                <img
                  className={cnDisruptiveSituations('icon')}
                  src={data[1].icon2}
                  alt="information"
                />
                <ProjectTextSmall text={data[1].textSmall2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cnDisruptiveSituations('section')}>
        <div className={cnDisruptiveSituations('white')}>
          <div className={cnDisruptiveSituations('phone-screens')}>
            <div className={cnDisruptiveSituations('phone-screens-block')}>
              <div
                className={`${cnDisruptiveSituations(
                  'phone-screens-authorization'
                )} ${cnDisruptiveSituations(`phone-screens-authorization-${data[2].id}`)}`}
              >
                <img src={data[2].imgMedium} alt="authorization" />
              </div>
              <div className={cnDisruptiveSituations('phone-screens-scanner-header')}>
                <img src={data[2].imgMedium2} alt="scanner" />
              </div>
            </div>
            <div className={cnDisruptiveSituations('phone-screens-block')}>
              <div className={cnDisruptiveSituations('phone-screens-scanner-footer')}>
                <img src={data[2].imgMedium3} alt="scanner" />
              </div>
              <div className={cnDisruptiveSituations('phone-screens-passenger-amount')}>
                <img src={data[2].imgMedium4} alt="passenger amount" />
              </div>
            </div>
            <div className={cnDisruptiveSituations('phone-screens-block')}>
              <div
                className={`${cnDisruptiveSituations(
                  'phone-screens-passenger-amount'
                )} ${cnDisruptiveSituations(`phone-screens-passenger-amount-${data[2].id}`)}`}
              >
                <img src={data[2].imgMedium4} alt="passenger amount" />
              </div>
              <div className={cnDisruptiveSituations('phone-screens-voucher-used-header')}>
                <img src={data[2].imgMedium5} alt="voucher used header" />
              </div>
            </div>
            <div className={cnDisruptiveSituations('phone-screens-block')}>
              <div className={cnDisruptiveSituations('phone-screens-voucher-used')}>
                <img src={data[2].imgMedium6} alt="voucher used" />
              </div>
              <div className={cnDisruptiveSituations('phone-screens-authorization')}>
                <img src={data[2].imgMedium} alt="authorization" />
              </div>
            </div>
          </div>
        </div>
        <div className={cnDisruptiveSituations('title-wrapper')}>
          <TitleH4 title={data[2].title} />
        </div>
        <div className={cnDisruptiveSituations('center')}>
          <div
            className={`${cnDisruptiveSituations('section-flex')} ${cnDisruptiveSituations(
              `section-flex-${data[2].id}`
            )}`}
          >
            <div
              className={`${cnDisruptiveSituations('section-block-left')} ${cnDisruptiveSituations(
                `section-block-left-${data[2].id}`
              )}`}
            ></div>

            <div className={cnDisruptiveSituations('section-block')}>
              <ProjectTextHard text={data[2].textHard} />
              <ProjectTextMedium text={data[2].textMedium} />
              <ProjectTextMedium text={data[2].textMedium2} />
              <ProjectTextMedium text={data[2].textMedium3} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${cnDisruptiveSituations('section')} ${cnDisruptiveSituations(
          `section-${data[3].id}`
        )}`}
      >
        <div className={cnDisruptiveSituations('white')}>
          <div
            className={`${cnDisruptiveSituations('phone-screens')} ${cnDisruptiveSituations(
              `phone-screens-${data[3].id}`
            )}`}
          >
            <div className={cnDisruptiveSituations('background-white-voucher-upload')}>
              <img src={data[3].img} alt="voucher upload" />
            </div>
            <Parallax speed={-8}>
              <div className={cnDisruptiveSituations('background-white-delete-voucher')}>
                <img src={data[3].imgMedium} alt="delete" />
              </div>
              <div className={cnDisruptiveSituations('background-white-registry-filtering')}>
                <img src={data[3].imgMedium2} alt="registry" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnDisruptiveSituations('center')}>
          <div
            className={`${cnDisruptiveSituations('section-flex')} ${cnDisruptiveSituations(
              `section-flex-${data[3].id}`
            )}`}
          >
            <div className={cnDisruptiveSituations('section-block-left')}>
              <TitleH4 title={data[3].title} />
            </div>
            <div className={cnDisruptiveSituations('section-block')}>
              <ProjectTextHard text={data[3].textHard} />
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter title={data[4].title} id={data[4].id} url={data[4].url} />
    </div>
  );
};
