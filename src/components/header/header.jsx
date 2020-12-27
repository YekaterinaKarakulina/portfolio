/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import HeaderLink from '../header-link';
import Certificate from '../certificate';
import headerLinks from './header-links-data';
import certificates from './certificates-data';

import './header.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Header = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [certificate, setCertificate] = useState('');

  const modalClasses = isModalVisible ? 'certificate__modal' : 'certificate__modal hidden';
  const closeBtnClasses = isModalVisible ? 'close-btn' : 'close-btn hidden';

  const modalImageClasses = `modal__image ${certificate.format}`;

  const modalImageSrc = `./assets/${certificate.name}`;

  const modal = (
    <>
      <div className={modalClasses}>
        <img className={modalImageClasses} src={modalImageSrc} alt="" />
      </div>
      <div
        className={closeBtnClasses}
        onClick={() => {
          setModalVisibility(false);
          setCertificate('');
        }}
      />
    </>
  );

  const handleClick = (event) => {
    const currentId = Number(event.target.closest('[data-id]').getAttribute('data-id'));
    const currentCertificate = certificates.find(({ id }) => id === currentId);
    setModalVisibility(true);
    setCertificate(currentCertificate);
  };

  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="personal-info">
            <div className="info">
              <img className="img photo" src="./assets/Yekaterina_photo.JPG" alt="" />
              <div className="title">Yekaterina Karakulina</div>
              <div className="title">FRONTEND developer</div>
            </div>

            <div className="links">
              {headerLinks.map(({ id, icon, text, link }) => (
                <HeaderLink
                  key={id}
                  id={id}
                  text={text}
                  iconName={icon}
                  link={link}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="certificates">
            {certificates.map(({ id, format, name, alt }) => (
              <Certificate
                key={id}
                id={id}
                format={format}
                name={name}
                alt={alt}
                handleClick={handleClick}
              />
            ))}
          </div>

          <div className="certificates__slider">
            <Swiper
              breakpoints={{
                // when window width is >= 428px
                429: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 1,
                },
              }}
              navigation
            >
              {certificates.map(({ id, format, name, alt }) => (
                <SwiperSlide>
                  <Certificate
                    key={id}
                    id={id}
                    format={format}
                    name={name}
                    alt={alt}
                    handleClick={handleClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </header>
      {modal}
    </>
  );
};

export default React.memo(Header);
