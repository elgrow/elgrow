import { cn } from '@bem-react/classname';
import { FC, useState } from 'react';

import { DataProjectProps } from '../../components/type';
import { ProjectTextMedium } from '../../components/ProjectTextMedium/ProjectTextMedium';
import { ProjectTextHard } from '../../components/ProjectTextHard/ProjectTextHard';
import { TitleH4 } from '../../components/TitleH4/TitleH4';
import { ProjectTextSmall } from '../../components/ProjectTextSmall/ProjectTextSmall';
import { ProjectAvatars } from '../../components/ProjectAvatars/ProjectAvatars';
import { ProjectApplicationStage } from '../../components/ProjectApplicationStage/ProjectApplicationStage';
import { ProjectFooter } from '../../components/ProjectFooter/ProjectFooter';
import { ProjectHeader } from '../../components/ProjectHeader/ProjectHeader';
import { Menu } from '../../components/Menu/Menu';

import './AviationTrainingCenterPage.scss';

const cnAviationTrainingCenterPage = cn('AviationTrainingCenterPage');

export const AviationTrainingCenterPage: FC<DataProjectProps> = ({ data }) => {

  const course = [data[2].img, data[2].img2];
  const candidate = [data[3].img, data[3].img2];

  const [index, setIndex] = useState({
    courseNum: 0,
    courseWrapper: false,
    candidateNum: 0,
  });

  const [buttonDisplay, setButtonDisplay] = useState({
    courseLeft: true,
    courseRight: false,
    candidateLeft: true,
    candidateRight: false,
  });

  const courseWrapper = index.courseWrapper ? 'white-edit-course-reference' : 'white-edit-course';
  const courseButtonLeft = buttonDisplay.courseLeft ? 'button-none' : 'button-left';
  const courseButtonRight = buttonDisplay.courseRight ? 'button-none' : 'button-right';
  const candidateButtonLeft = buttonDisplay.candidateLeft ? 'button-none' : 'button-left';
  const candidateButtonRight = buttonDisplay.candidateRight ? 'button-none' : 'button-right';
  const courseGreenLeft = buttonDisplay.courseLeft
    ? 'green-points-button-none'
    : 'green-points-button';
  const courseGreenRight = buttonDisplay.courseLeft
    ? 'green-points-button'
    : 'green-points-button-none';
  const candidateGreenLeft = buttonDisplay.candidateLeft
    ? 'green-points-button-none'
    : 'green-points-button';
  const candidateGreenRight = buttonDisplay.candidateRight
    ? 'green-points-button-none'
    : 'green-points-button';

  const getNewCourse = () => {
    return course.slice(index.courseNum, index.courseNum + 1);
  };

  const getNewCandidate = () => {
    return candidate.slice(index.candidateNum, index.candidateNum + 1);
  };

  const getNextCourse = () => {
    if (index.courseNum == 1) {
      setIndex((prev) => ({
        ...prev,
        courseNum: 0,
        courseWrapper: false,
      }));
      setButtonDisplay((prev) => ({
        ...prev,
        courseLeft: !prev.courseLeft,
        courseRight: !prev.courseRight,
      }));
    } else {
      setIndex((prev) => ({
        ...prev,
        courseNum: 1,
        courseWrapper: !prev.courseWrapper,
      }));
      setButtonDisplay((prev) => ({
        ...prev,
        courseLeft: !prev.courseLeft,
        courseRight: !prev.courseRight,
      }));
    }
  };

  const getNextCandidate = () => {
    if (index.candidateNum == 1) {
      setIndex((prev) => ({
        ...prev,
        candidateNum: 0,
      }));
      setButtonDisplay((prev) => ({
        ...prev,
        candidateLeft: !prev.candidateLeft,
        candidateRight: !prev.candidateRight,
      }));
    } else {
      setIndex((prev) => ({
        ...prev,
        candidateNum: 1,
      }));
      setButtonDisplay((prev) => ({
        ...prev,
        candidateLeft: !prev.candidateLeft,
        candidateRight: !prev.candidateRight,
      }));
    }
  };

  return (
    <div className={cnAviationTrainingCenterPage()}>
      <div className={cnAviationTrainingCenterPage('menu-back')}>
        <Menu />
      </div>
      <ProjectHeader heading={data[0].heading} />
      <section className={cnAviationTrainingCenterPage('section')}>
        <div className={cnAviationTrainingCenterPage('white')}>
          <div className={cnAviationTrainingCenterPage('white-history')}>
            <img src={data[0].img} alt="history" />
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[0].id}`)}`}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}>
              <ProjectTextHard text={data[0].textHard} id={data[0].id} />
            </div>
            <div className={cnAviationTrainingCenterPage('section-block')}>
              <ProjectTextMedium text={data[0].textMedium} id={data[0].id} />
              <ProjectTextMedium text={data[0].textMedium2} id={data[0].id} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnAviationTrainingCenterPage('section')}>
        <div className={cnAviationTrainingCenterPage('title-wrapper')}>
          <TitleH4 title={data[1].titlePart} id={data[1].id} />
        </div>
        <div className={cnAviationTrainingCenterPage('white-job-profile')}>
          <img src={data[1].img} alt="job profile" />
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[1].id}`)}`}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}>
              <TitleH4 title={data[1].title} id={data[1].id} />
            </div>
            <div className={cnAviationTrainingCenterPage('section-block')}>
              <ProjectTextHard text={data[1].textHard} id={data[1].id} />
              <ProjectAvatars avatars={data[1].avatars} id={data[1].id} />
              <ProjectTextMedium text={data[1].textMedium} id={data[1].id} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnAviationTrainingCenterPage('section')}>
        <div className={cnAviationTrainingCenterPage(courseWrapper)}>
          <button
            className={cnAviationTrainingCenterPage(courseButtonLeft)}
            onClick={getNextCourse}
          >
          </button>
          {getNewCourse().map((path, index) => (
            <img src={path} key={index} alt="course" />
          ))}
          <button
            className={cnAviationTrainingCenterPage(courseButtonRight)}
            onClick={getNextCourse}
          >
          </button>
          <div className={cnAviationTrainingCenterPage('green-points')}>
            <button className={cnAviationTrainingCenterPage(courseGreenLeft)}></button>
            <button className={cnAviationTrainingCenterPage(courseGreenRight)}></button>
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('white-320course')}>
          <div className={cnAviationTrainingCenterPage('white-320course-edit')}>
            <img src={data[2].img} alt="course" />
          </div>
          <div className={cnAviationTrainingCenterPage('white-320course-reference')}>
            <img src={data[2].img2} alt="course" />
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[2].id}`)}`}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}>
              <TitleH4 title={data[2].title} id={data[2].id} />
            </div>
            <div className={cnAviationTrainingCenterPage('section-block')}>
              <ProjectTextHard text={data[2].textHard} id={data[2].id} />
              <ProjectTextMedium text={data[2].textMedium} id={data[2].id} />
              <div className={cnAviationTrainingCenterPage('section-block-icon')}>
                <img
                  className={cnAviationTrainingCenterPage('icon')}
                  src={data[2].icon}
                  alt="people"
                />
                <ProjectTextSmall text={data[2].textSmall} id={data[2].id} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cnAviationTrainingCenterPage('section')}>
        <div className={cnAviationTrainingCenterPage('white-candidate-log')}>
          <button
            className={cnAviationTrainingCenterPage(candidateButtonLeft)}
            onClick={getNextCandidate}
          >
          </button>
          {getNewCandidate().map((path, index) => (
            <img src={path} key={index} alt="candidate" />
          ))}
          <button
            className={cnAviationTrainingCenterPage(candidateButtonRight)}
            onClick={getNextCandidate}
          >
          </button>
          <div className={cnAviationTrainingCenterPage('green-points')}>
            <button className={cnAviationTrainingCenterPage(candidateGreenLeft)}></button>
            <button className={cnAviationTrainingCenterPage(candidateGreenRight)}></button>
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('white-320candidate')}>
          <div className={cnAviationTrainingCenterPage('white-320candidate-log')}>
            <img src={data[3].img} alt="course" />
          </div>
          <div className={cnAviationTrainingCenterPage('white-320candidate-log')}>
            <img src={data[3].img2} alt="course" />
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[3].id}`)}`}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}>
              <TitleH4 title={data[3].title} id={data[3].id} />
            </div>

            <div className={cnAviationTrainingCenterPage('section-block')}>
              <ProjectTextMedium text={data[3].textMedium} id={data[3].id} />
              <ProjectTextMedium text={data[3].textMedium2} id={data[3].id} />
            </div>
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('black')}>
          <div className={cnAviationTrainingCenterPage('center')}>
            <div
              className={`${cnAviationTrainingCenterPage(
                'background-black'
              )} ${cnAviationTrainingCenterPage('background-black-font-size')}`}
            >
              <div className={cnAviationTrainingCenterPage('section-block-left')}>
                <img
                  className={cnAviationTrainingCenterPage('background-black-image')}
                  src={data[3].imgMedium}
                  alt="black"
                />
              </div>
              <div className={cnAviationTrainingCenterPage('section-block')}>
                <ProjectTextHard text={data[3].textHard} id={data[3].id} />
                <ProjectTextMedium text={data[3].textMedium3} id={data[3].id} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cnAviationTrainingCenterPage('section')}>
        <div className={cnAviationTrainingCenterPage('title-wrapper-border')}>
          <TitleH4 title={data[4].title} id={data[4].id} />
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[4].id}`)} `}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}>
              <div
                className={`${cnAviationTrainingCenterPage(
                  `image-back`
                )} ${cnAviationTrainingCenterPage(`image-back-${data[4].id}`)}`}
              >
                <img src={data[4].img} alt="directory training centers" />
              </div>
            </div>
            <div className={cnAviationTrainingCenterPage('section-block')}>
              <div className={cnAviationTrainingCenterPage('entity')}>
                <img
                  className={cnAviationTrainingCenterPage('icon')}
                  src={data[4].icon}
                  alt="information"
                />
                <ProjectTextHard text={data[4].textHard} id={data[4].id} />
              </div>
              <ProjectTextMedium text={data[4].textMedium} id={data[4].id} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnAviationTrainingCenterPage('section')}>
        <div className={cnAviationTrainingCenterPage('white-directory')}>
          <img src={data[5].img} alt="directory" />
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[5].id}`)}`}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}>
              <TitleH4 title={data[5].title} id={data[5].id} />
            </div>

            <div className={cnAviationTrainingCenterPage('section-block')}>
              <ProjectTextMedium text={data[5].textMedium} id={data[5].id} />
              <ProjectTextHard text={data[5].textHard} id={data[5].id} />
              <ProjectTextMedium text={data[5].textMedium2} id={data[5].id} />
            </div>
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('black')}>
          <div className={cnAviationTrainingCenterPage('center')}>
            <div className={`${cnAviationTrainingCenterPage('background-black')}`}>
              <img
                className={cnAviationTrainingCenterPage('background-black-image')}
                src={data[5].imgMedium}
                alt=""
              />
              <ProjectTextMedium text={data[5].textMedium3} id={data[5].id} />
              <img
                className={cnAviationTrainingCenterPage('background-black-image')}
                src={data[5].imgMedium2}
                alt=""
              />
              <ProjectTextMedium text={data[5].textMedium4} id={data[5].id} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${cnAviationTrainingCenterPage('section')} ${cnAviationTrainingCenterPage(
          `section-${data[6].id}`
        )}`}
      >
        <div className={cnAviationTrainingCenterPage('title-wrapper-border')}></div>
        <div className={cnAviationTrainingCenterPage('white-history-list')}>
          <img src={data[6].img} alt="history" />
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[6].id}`)}`}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}>
              <TitleH4 title={data[6].title} id={data[6].id} />
            </div>
            <div className={cnAviationTrainingCenterPage('section-block')}>
              <ProjectTextMedium text={data[6].textMedium} id={data[6].id} />
            </div>
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('title-wrapper')}>
          <ProjectTextHard text={data[6].textHard} id={data[6].id} />
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[6].id}`)}`}
          >
            <ProjectApplicationStage stage={data[6].stage} id={data[6].id} />
          </div>
        </div>
        <div className={cnAviationTrainingCenterPage('white-applications-list')}>
          <img src={data[6].imgMedium} alt="applications" />
        </div>
        <div className={cnAviationTrainingCenterPage('center')}>
          <div
            className={`${cnAviationTrainingCenterPage(
              'section-flex'
            )} ${cnAviationTrainingCenterPage(`section-flex-${data[6].id}`)}`}
          >
            <div className={cnAviationTrainingCenterPage('section-block-left')}></div>
            <div className={cnAviationTrainingCenterPage('section-block')}>
              <h5 className={cnAviationTrainingCenterPage('section-block-text')}>
                {data[6].textMedium2}
              </h5>
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter title={data[7].title} id={data[7].id} url={data[7].url} />
    </div>
  );
};
