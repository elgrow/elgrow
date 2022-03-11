import { cn } from '@bem-react/classname';
import { FC, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Menu } from '../../components/Menu/Menu';
import { ProjectFooter } from '../../components/ProjectFooter/ProjectFooter';
import { ProjectHeader } from '../../components/ProjectHeader/ProjectHeader';
import { ProjectTextBig } from '../../components/ProjectTextBig/ProjectTextBig';
import { ProjectTextHard } from '../../components/ProjectTextHard/ProjectTextHard';
import { ProjectTextMedium } from '../../components/ProjectTextMedium/ProjectTextMedium';
import { TitleH4 } from '../../components/TitleH4/TitleH4';
import { DataProjectProps } from '../../components/type';

import './ParkingPage.scss';

export const ParkingPage: FC<DataProjectProps> = ({ data }) => {
  const cnParking = cn('Parking');
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
    const animItems = document.querySelectorAll('._anim-items');
    if (animItems.length > 0) {
      window.addEventListener('scroll', () => animOnScroll(animItems));
      animOnScroll(animItems);
    }
  }, []);
  return (
    <div className={cnParking()}>
      <div className={cnParking('menu-back')}>
        <Menu />
      </div>
      <ProjectHeader heading={data[0].heading} />
      <section className={cnParking('section')}>
        <div className={cnParking('white')}>
          <div className={cnParking('background-white')}>
            <Parallax speed={-8}>
              <div className={cnParking('background-white-shuttle')}>
                <img src={data[0].imgMedium2} alt="shuttle" />
              </div>
            </Parallax>
            <div className={cnParking('background-white-booking')}>
              <img src={data[0].img} alt="booking" />
            </div>
            <Parallax speed={8}>
              <div className={cnParking('background-white-bookPlace')}>
                <img src={data[0].imgMedium} alt="bookPlace" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnParking('center')}>
          <div
            className={`${cnParking('section-flex')} ${cnParking(
              `section-flex-${data[0].id}`
            )}`}
          >
            <div className={cnParking('section-block-left')}>
              <ProjectTextBig text={data[0].textBig} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${cnParking('section')} ${cnParking(
          `section-${data[1].id}`
        )}`}
      >
        <div className={cnParking('320phone-screens')}>
          <div className={cnParking('320phone-screens-bigBookPlace')}>
            <img src={data[1].imgMedium} alt="bookPlace" />
          </div>
          <div className={cnParking('320phone-screens-parkings')}>
            <img src={data[1].imgMedium2} alt="parkings" />
          </div>
          <div className={cnParking('320phone-screens-time')}>
            <img src={data[1].imgMedium3} alt="time" />
          </div>
        </div>
        <div className={cnParking('title-768display')}>
          <TitleH4 title={data[1].title} />
        </div>
        <div className={cnParking('center')}>
          <div
            className={`${cnParking('section-flex')} ${cnParking(
              `section-flex-${data[1].id}`
            )}`}
          >
            <div className={cnParking('section-block-left')}>
              <div className={cnParking('title-display')}>
                <TitleH4 title={data[1].title} />
              </div>
              <div className={cnParking('background-white-bigBookPlace')}>
                <img src={data[1].imgMedium} alt="bookPlace" />
              </div>
              <div className={cnParking('background-white-parkings')}>
                <img src={data[1].imgMedium2} alt="parkings" />
              </div>
              <div className={cnParking('background-white-time')}>
                <img src={data[1].imgMedium3} alt="time" />
              </div>
            </div>
            <div
              className={`${cnParking('section-block')} ${cnParking(
                `section-block-${data[1].id}`
              )}`}
            >
              <div className={cnParking('text-hard-wrapper')}>
                <ProjectTextHard text={data[1].textHard} />
              </div>
              <ProjectTextMedium text={data[1].ul} />
              <ul className={cnParking('section-block-list')}>
                <li>
                  <ProjectTextMedium text={data[1].li1} />
                </li>
                <li>
                  <ProjectTextMedium text={data[1].li2} />
                </li>
                <li>
                  <ProjectTextMedium text={data[1].li3} />
                </li>
                <li>
                  <ProjectTextMedium text={data[1].li4} />
                </li>
              </ul>
              <div className={cnParking('text-hard-wrapper')}>
                <ProjectTextHard text={data[1].textHard2} />
              </div>
              <ProjectTextMedium text={data[1].textMedium} />
              <ProjectTextMedium text={data[1].textMedium2} />
              <ProjectTextMedium text={data[1].textMedium3} />
              <ProjectTextMedium text={data[1].textMedium4} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnParking('section')}>
        <div
          className={`${cnParking('320phone-screens')} ${cnParking(
            `320phone-screens-${data[2].id}`
          )}`}
        >
          <div className={cnParking('320phone-screens-bigShuttle')}>
            <img src={data[2].imgMedium} alt="bookPlace" />
          </div>
          <div className={cnParking('320phone-screens-profile')}>
            <img src={data[2].imgMedium2} alt="profile" />
          </div>
          <div className={cnParking('320phone-screens-feedback')}>
            <img src={data[2].imgMedium3} alt="feedback" />
          </div>
        </div>
        <div className={cnParking('center')}>
          <div
            className={`${cnParking('section-flex')} ${cnParking(
              `section-flex-${data[2].id}`
            )}`}
          >
            <div className={cnParking('section-block-left')}>
              <div className={cnParking('phone-screens')}>
                <div className={cnParking('background-white-bigShuttle')}>
                  <img src={data[2].imgMedium} alt="shuttle" />
                </div>
                <div className={cnParking('background-white-profile')}>
                  <img src={data[2].imgMedium2} alt="profile" />
                </div>
                <div className={cnParking('background-white-feedback')}>
                  <img src={data[2].imgMedium3} alt="feedback" />
                </div>
              </div>
            </div>
            <div className={cnParking('section-block')}>
              <div className={cnParking('phone-text')}>
                <div className={cnParking('phone-text-block')}>
                  <p className={cnParking('phone-text-hard')}>
                    {data[2].textHard}
                  </p>
                  <p className={cnParking('phone-text-small')}>
                    {data[2].textSmall}
                  </p>
                </div>
                <div className={cnParking('phone-text-block')}>
                  <p className={cnParking('phone-text-hard')}>
                    {data[2].textHard2}
                  </p>
                  <p className={cnParking('phone-text-small')}>
                    {data[2].textSmall2}
                  </p>
                </div>
                <div className={cnParking('phone-text-block')}>
                  <p className={cnParking('phone-text-hard')}>
                    {data[2].textHard3}
                  </p>
                  <p className={cnParking('phone-text-small')}>
                    {data[2].textSmall3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cnParking('section')}>
        <div
          className={`${cnParking('320phone-screens')} ${cnParking(
            `320phone-screens-${data[3].id}`
          )}`}
        >
          <div className={cnParking('320phone-screens-confirmation')}>
            <img src={data[3].imgMedium2} alt="confirmation" />
          </div>
          <div className={cnParking('320phone-screens-go')}>
            <img src={data[3].imgMedium3} alt="go" />
          </div>
          <div className={cnParking('320phone-screens-order')}>
            <img src={data[3].imgMedium4} alt="order" />
          </div>
        </div>
        <div className={cnParking('title-768display')}>
          <TitleH4 title={data[3].title} />
        </div>
        <div className={cnParking('center')}>
          <div
            className={`${cnParking('section-flex')} ${cnParking(
              `section-flex-${data[3].id}`
            )}`}
          >
            <div className={cnParking('section-block-left')}>
              <div className={cnParking('title-display')}>
                <TitleH4 title={data[3].title} />
              </div>
              <Parallax speed={-10}>
                <div className={cnParking('approval-authorization')}>
                  <img src={data[3].imgMedium} alt="authorization" />
                </div>
              </Parallax>
            </div>
            <div
              className={`${cnParking('section-block')} ${cnParking(
                `section-block-${data[3].id}`
              )}`}
            >
              <ProjectTextHard text={data[3].textHard} />
              <ProjectTextMedium text={data[3].textMedium} />
              <ProjectTextMedium text={data[3].textMedium2} />
              <ProjectTextMedium text={data[3].textMedium3} />
              <ProjectTextMedium text={data[3].textMedium4} />
              <div className={cnParking('approval')}>
                <div className={cnParking('approval-confirmation')}>
                  <img src={data[3].imgMedium2} alt="confirmation" />
                </div>
                <div className={cnParking('approval-go')}>
                  <img src={data[3].imgMedium3} alt="go" />
                </div>
                <div className={cnParking('approval-order')}>
                  <img src={data[3].imgMedium4} alt="order" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cnParking('section')}>
        <div className={cnParking('black')}>
          <div className={cnParking('background-black')}>
            <div className={cnParking('background-black-user')}>
              <img src={data[4].img} alt="user" />
            </div>
            <Parallax speed={-10}>
              <div className={cnParking('background-black-blocking')}>
                <img src={data[4].imgMedium} alt="blocking" />
              </div>
            </Parallax>
          </div>
        </div>
        <div
          className={`${cnParking('title-768display')} ${cnParking(
            `title-768display-${data[4].id}`
          )}`}
        >
          <TitleH4 title={data[4].title} />
        </div>
        <div className={cnParking('center')}>
          <div
            className={`${cnParking('section-flex')} ${cnParking(
              `section-flex-${data[4].id}`
            )}`}
          >
            <div className={cnParking('section-block-left')}>
              <div className={cnParking('title-display')}>
                <TitleH4 title={data[4].title} />
              </div>
            </div>
            <div className={cnParking('section-block')}>
              <ProjectTextHard text={data[4].textHard} />
              <ProjectTextHard text={data[4].textHard2} />
              <ProjectTextMedium text={data[4].textMedium} />
              <ProjectTextMedium text={data[4].textMedium2} />
              <ProjectTextHard text={data[4].textHard3} />
              <ProjectTextMedium text={data[4].textMedium3} />
              <ProjectTextMedium text={data[4].textMedium4} />
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter title={data[5].title} id={data[5].id} url={data[5].url} />
    </div>
  );
};
