import { cn } from '@bem-react/classname';
import { FC, useEffect } from 'react';
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

import './FoodPage.scss';
import { TitleH4White } from './../../components/TitleH4White/TitleH4White';

export const FoodPage: FC<DataProjectProps> = ({ data }) => {
  const cnFood = cn('Food');

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
    <div className={cnFood()}>
      <div className={cnFood('menu-back')}>
        <Menu />
      </div>
      <ProjectHeader heading={data[0].heading} />
      <section className={cnFood('section')}>
        <div className={cnFood('white')}>
          <div className={cnFood('background-white')}>
            <div className={cnFood('background-white-heating')}>
              <img src={data[0].img} alt="heating" />
            </div>
            <Parallax speed={-6}>
              <div className={cnFood('background-white-tasks')}>
                <img src={data[0].imgMedium} alt="tasks" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnFood('background-white-tasks2')}>
                <img src={data[0].imgMedium2} alt="tasks" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnFood('background-white-vacation')}>
                <img src={data[0].imgSmall} alt="tasks" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnFood('center')}>
          <div
            className={`${cnFood('section-flex')} ${cnFood(
              `section-flex-${data[0].id}`
            )}`}
          >
            <div className={cnFood('section-block-left')}>
              <ProjectTextBig text={data[0].textBig} />
            </div>
          </div>
        </div>
      </section>
      <section className={cnFood('section')}>
        <div className={cnFood('center')}>
          <div
            className={`${cnFood('section-flex')} ${cnFood(
              `section-flex-${data[1].id}`
            )}`}
          >
            <div className={cnFood('section-block-left')}>
              <TitleH4 title={data[1].title} />
              <div className={cnFood('section-block')}>
                <ProjectTextHard text={data[1].textHard} />
                <ProjectTextMedium text={data[1].textMedium} />
                <ProjectTextSmall prefix="—" text={data[1].textSmall} />
                <ProjectTextSmall prefix="—" text={data[1].textSmall2} />
                <ProjectTextSmall prefix="—" text={data[1].textSmall3} />
                <ProjectTextSmall prefix="—" text={data[1].textSmall4} />
              </div>
            </div>
            <div className={cnFood('wrapper-image')}>
              <img src={data[2].img} alt="order" />
              <img src={data[2].img2} alt="order" />
              <img src={data[2].img3} alt="order" />
            </div>
            <div className={cnFood('section-block-wrapper')}>
              <div className={cnFood('section-block-wrapper-orders')}>
                <TitleH4 title={data[2].title} />
              </div>
              <div className={cnFood('section-block-wrapper-orders')}>
                <ProjectTextHard text={data[2].textHard} />
                <ProjectTextMedium text={data[2].textMedium} />
              </div>
            </div>
          </div>
          <div className={cnFood('black')}>
            <div className={cnFood('background-orders-black')}>
              <div className={cnFood('wrapper-image')}>
                <img src={data[3].img} alt="order" />
                <img src={data[3].img2} alt="order" />
                <img src={data[3].img3} alt="order" />
              </div>
              <div className={cnFood('section-block-wrapper')}>
                <div className={cnFood('section-block-wrapper-orders2')}>
                  <TitleH4White title={data[3].title} />
                </div>
                <div className={cnFood('section-block-wrapper-orders2')}>
                  <ProjectTextHard text={data[3].textHard} />
                  <ProjectTextMedium text={data[3].textMedium} /> <br />
                  <ProjectTextMedium text={data[3].textMedium2} /> <br />
                  <ProjectTextMedium text={data[3].textMedium3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cnFood('section')}>
        <div className={cnFood('center')}>
          <div className={`${cnFood('section-flex-10')} `}>
            <div className={cnFood('section-block-wrapper')}>
              <div className={cnFood('section-block-wrapper-documents')}>
                <TitleH4 title={data[4].title} />
              </div>
              <div className={cnFood('section-block-wrapper-documents')}>
                <ProjectTextMedium text={data[4].textMedium} />
              </div>
            </div>
            <div className={cnFood('wrapper-image-docs')}>
              <Parallax speed={-6}>
                <div className={cnFood('background-white-agreement')}>
                  <img src={data[4].img} alt="tasks" />
                </div>
              </Parallax>
              <Parallax speed={-1}>
                <div className={cnFood('background-white-feedback')}>
                  <img src={data[4].img2} alt="tasks" />
                </div>
              </Parallax>
              <Parallax speed={-6}>
                <div className={cnFood('background-white-feedbackLetter')}>
                  <img src={data[4].img3} alt="tasks" />
                </div>
              </Parallax>
            </div>
            <div className={cnFood('section-block-wrapper')}>
              <div className={cnFood('section-block-wrapper-documents')}>
                <TitleH4 title={data[5].title} />
              </div>
              <div
                style={{ marginTop: '30px' }}
                className={cnFood('section-block-wrapper-documents')}
              >
                <ProjectTextMedium text={data[5].textMedium} />
                <br />
                <ProjectTextMedium text={data[5].textMedium2} />
              </div>
            </div>
          </div>
        </div>
        <div className={cnFood('center')}>
          <div className={`${cnFood('section-flex-11')} `}>
            <div className={cnFood('section-block-left')}>
              <TitleH4 title={data[6].title} />
              <div className={cnFood('section-block-wrapper-courier')}>
                <ProjectTextHard text={data[6].textHard} />
                <br />
                <ProjectTextMedium text={data[6].textMedium} /> <br />
                <ProjectTextMedium text={data[6].textMedium2} /> <br />
                <ProjectTextMedium text={data[6].textMedium3} />
              </div>
            </div>
            <div className={cnFood('wrapper-image-docs')}>
              <Parallax speed={-6}>
                <div className={cnFood('background-white-courier2')}>
                  <img src={data[6].img2} alt="tasks" />
                </div>
              </Parallax>
              <Parallax speed={-6}>
                <div className={cnFood('background-white-courier')}>
                  <img src={data[6].img} alt="tasks" />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
        <div className={cnFood('black')}>
          <div className={cnFood('background-admin-black')}>
            <Parallax speed={-1}>
              <div className={cnFood('background-black-admin')}>
                <img src={data[7].img} alt="order" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnFood('background-black-login')}>
                <img src={data[7].img2} alt="order" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnFood('background-black-orderTable')}>
                <img src={data[7].img3} alt="order" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnFood('background-black-filterList')}>
                <img src={data[7].img4} alt="order" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnFood('center')}>
          <div className={`${cnFood('section-flex-12')} `}>
            <div className={cnFood('section-block-left')}>
              <TitleH4 title={data[7].title} />
              <div className={cnFood('section-block-wrapper-admin')}>
                <ProjectTextHard text={data[7].textHard} />
                <br />
                <br />
                <ProjectTextHard text={data[7].textHard2} /> <br />
                <br />
                <ProjectTextMedium text={data[7].textMedium} /> <br />
                <br />
                <ProjectTextHard text={data[7].textHard3} /> <br />
                <br />
                <ProjectTextMedium text={data[7].textMedium2} />
                <div className={cnFood('wrapper-image-docs')}>
                  <Parallax speed={-6}>
                    <div className={cnFood('background-white-table')}>
                      <img src={data[7].img5} alt="tasks" />
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
            <div
              style={{ marginTop: '80px' }}
              className={cnFood('wrapper-image-black')}
            >
              <img src={data[7].img6} alt="order" />
            </div>
            <br /> <br />
            <div className={cnFood('section-block-left')}>
              <div className={cnFood('section-block-wrapper-admin2')}>
                <ProjectTextHard text={data[8].textHard} /> <br />
                <br />
                <ProjectTextMedium text={data[8].textMedium} /> <br />
                <br />
                <ProjectTextHard text={data[8].textHard2} /> <br />
                <br />
                <ProjectTextMedium text={data[8].textMedium2} /> <br />
                <ProjectTextMedium text={data[8].textMedium3} />
                <div className={cnFood('wrapper-image-docs')}>
                  <Parallax speed={-6}>
                    <div className={cnFood('background-white-addDocument')}>
                      <img src={data[8].img2} alt="tasks" />
                    </div>
                  </Parallax>
                  <Parallax speed={-6}>
                    <div className={cnFood('background-white-createAppeal')}>
                      <img src={data[8].img} alt="tasks" />
                    </div>
                  </Parallax>
                  <Parallax speed={-6}>
                    <div className={cnFood('background-white-checkboxes')}>
                      <img src={data[8].img3} alt="tasks" />
                    </div>
                  </Parallax>
                </div>
                <br /> <br /> <br /> <br /> <br /> <br />
                <ProjectTextHard text={data[8].textHard3} /> <br />
                <br />
                <ProjectTextMedium text={data[8].textMedium4} /> <br />
              </div>
            </div>
          </div>
        </div>
        <div className={cnFood('black')}>
          <div className={cnFood('background-admin-black')}>
            <Parallax speed={-1}>
              <div className={cnFood('background-black-foodSupplier')}>
                <img src={data[9].img} alt="order" />
              </div>
            </Parallax>
            <Parallax speed={-6}>
              <div className={cnFood('background-black-editDish')}>
                <img src={data[9].img2} alt="order" />
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cnFood('center')}>
          <div className={`${cnFood('section-flex-13')} `}>
            <div className={cnFood('section-block-left')}>
              <TitleH4 title={data[10].title} />
              <div className={cnFood('section-block-wrapper-admin')}>
                <ProjectTextHard text={data[10].textHard} />
                <br />
                <br />
                <ProjectTextHard text={data[10].textHard2} /> <br />
                <br />
                <ProjectTextMedium text={data[10].textMedium} />
                <br />
                <ProjectTextMedium text={data[10].textMedium2} />
                <br />
                <ProjectTextMedium text={data[10].textMedium3} />
              </div>
            </div>
            <Parallax speed={-6}>
              <div className={cnFood('background-white-foodSupplierFilter')}>
                <img src={data[10].img2} alt="tasks" />
              </div>
            </Parallax>{' '}
            <Parallax speed={-6}>
              <div className={cnFood('background-white-foodSupplierContext')}>
                <img src={data[10].img3} alt="tasks" />
              </div>
            </Parallax>
            <div
              style={{ marginTop: '80px' }}
              className={cnFood('wrapper-image-black')}
            >
              <img src={data[10].img} alt="order" />
            </div>
            <br /> <br />
            <div className={cnFood('section-block-left')}>
              <div className={cnFood('section-block-wrapper-admin2')}>
                <ProjectTextHard text={data[10].textHard3} /> <br />
                <br />
                <ProjectTextMedium text={data[10].textMedium4} /> <br />
                <ProjectTextMedium text={data[10].textMedium5} /> <br />
                <ProjectTextMedium text={data[10].textMedium6} />
                <br />
                <ProjectTextMedium text={data[10].textMedium7} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectFooter
        title={data[11].title}
        id={data[11].id}
        url={data[11].url}
      />
    </div>
  );
};
