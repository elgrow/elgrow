import React, { Component, useState } from 'react';
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

import styles from './ClientSlider.module.scss';

const ClientSlider = () => {
  const cnClientSlider = cn('ClientsSlider');

  const clients = [ASOS, VTB, KFC, OPENBANK, MEGAFON, TATTELECOM];

  function SampleNextArrow(props: { onClick: any }) {
    const { onClick } = props;
    return <div className={styles.next} onClick={onClick} />;
  }

  function SamplePrevArrow(props: { onClick: any }) {
    const { onClick } = props;
    return <div className={styles.prev} onClick={onClick} />;
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
          <div className={styles.client} key={index}>
            <div className={styles.block}>{svgComponent(client)}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default ClientSlider;
