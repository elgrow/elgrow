import React, { Component, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { cn } from '@bem-react/classname';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReactComponent as ASOS } from '../../assets/images/ClientIcons/ASOS.svg';
import { ReactComponent as VTB } from '../../assets/images/ClientIcons/VTB.svg';
import { ReactComponent as OPENBANK } from '../../assets/images/ClientIcons/OPENBANK.svg';
import { ReactComponent as KFC } from '../../assets/images/ClientIcons/KFC.svg';
import { ReactComponent as MEGAFON } from '../../assets/images/ClientIcons/MEGAFON.svg';
import { ReactComponent as TATTELECOM } from '../../assets/images/ClientIcons/TELECOM.svg';

import './ClientSlider.scss';

const ClientSlider = () => {
  const cnClientSlider = cn('ClientsSlider');
  const clients = [ASOS, VTB, KFC, OPENBANK, MEGAFON, TATTELECOM];

  const ref = useRef(null);

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

  function SampleNextArrow(props: { onClick: any }) {
    const { onClick } = props;
    return <div className="next" onClick={onClick} />;
  }

  function SamplePrevArrow(props: { onClick: any }) {
    const { onClick } = props;
    return <div className="prev" onClick={onClick} />;
  }

  const svgComponent = (Svg: any) => {
    return <Svg />;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow onClick={undefined} />,
    prevArrow: <SamplePrevArrow onClick={undefined} />,
  };

  return (
    <section id="clients" className={cnClientSlider()}>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div className="client _anim-items _anim_no_hide" key={index}>
            <div className="block">{svgComponent(client)}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default ClientSlider;
