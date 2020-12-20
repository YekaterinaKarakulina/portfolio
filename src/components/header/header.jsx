import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faMobileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './header.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="personal-info">
          <div className="info">
            <img className="img photo" src="./src/assets/Yekaterina_photo.JPG" alt="" />
            <div className="title">Yekaterina Karakulina</div>
            <div className="title">FRONTEND developer</div>
          </div>

          <div className="links">
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              yekaterina.karakulina@gmail.com
            </div>
            <div>
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
              @yekaterinaKarakulina
            </div>
            <div>
              <FontAwesomeIcon icon={faMobileAlt} className="icon" />
              +971502805670
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <a
                className="link"
                href="https://github.com/YekaterinaKarakulina"
                target="_blank"
                rel="noreferrer"
              >
                My github
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              <a
                className="link"
                href="https://www.linkedin.com/in/yekaterina-karakulina-9a4361184"
                target="_blank"
                rel="noreferrer"
              >
                My LinkedIn profile
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <a
                className="link"
                href="https://hh.kz/resume/3766db87ff082ba1210039ed1f76696761344f"
                target="_blank"
                rel="noreferrer"
              >
                My HeadHunter profile
              </a>
            </div>
          </div>
        </div>

        <div className="certificates">
          <img
            id="react"
            className="img certificate landscape"
            src="./src/assets/Yekaterina_react.png"
            alt="RS school React certificate"
          />
          <img
            id="js"
            className="img certificate landscape"
            src="./src/assets/Yekaterina_js.png"
            alt="RS school JS certificate"
          />
          <img
            id="qa"
            className="img certificate portrait"
            src="./src/assets/Yekaterina_QA.png"
            alt="EPAM QA certificate"
          />
          <img
            id="ielts"
            className="img certificate portrait"
            src="./src/assets/Yekaterina_IELTS.JPG"
            alt="IELTS certificate"
          />
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
            <SwiperSlide>
              <img
                id="react"
                className="img certificate landscape"
                src="./src/assets/Yekaterina_react.png"
                alt="RS school React certificate"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                id="js"
                className="img certificate landscape"
                src="./src/assets/Yekaterina_js.png"
                alt="RS school JS certificate"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                id="qa"
                className="img certificate portrait"
                src="./src/assets/Yekaterina_QA.png"
                alt="EPAM QA certificate"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                id="ielts"
                className="img certificate portrait"
                src="./src/assets/Yekaterina_IELTS.JPG"
                alt="IELTS certificate"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* <div className="certificate__modal hidden">
        <img className="modal__image" src="./src/assets/Yekaterina_js.png" alt="" />
      </div>
      <div className="close-btn hidden" /> */}
    </header>
  );
};

export default React.memo(Header);
