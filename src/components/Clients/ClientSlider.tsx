import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import { cn } from '@bem-react/classname';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import asosColor from '../../assets/images/asos_color.png';
import vtbColor from '../../assets/images/vtb_color.png';
import kfcColor from '../../assets/images/kfc_color.png';
import openColor from '../../assets/images/open_color.png';
import megafonColor from '../../assets/images/megafon_color.png';
import telecomColor from '../../assets/images/telecom_color.png';

import styles from './ClientSlider.module.scss';

const ClientSlider = () => {
  const cnClientSlider = cn('ClientsSlider');

  const clients = [asosColor, vtbColor, kfcColor, openColor, megafonColor, telecomColor];

  function SampleNextArrow(props: { onClick: any }) {
    const { onClick } = props;
    return <div className={styles.next} onClick={onClick} />;
  }

  function SamplePrevArrow(props: { onClick: any }) {
    const { onClick } = props;
    return <div className={styles.prev} onClick={onClick} />;
  }

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
        {clients.map((client, key) => (
          <div className={styles.client} key={key}>
            <div className={styles.block}>
              <img alt="client" src={client} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default ClientSlider;
