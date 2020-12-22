import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './card.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Card = ({ data }) => {
  const { name, description, demoLink, codeLink } = data;

  const title = demoLink ? (
    <a href={demoLink} target="_blank" rel="noreferrer">
      <h4 className="card__title">{name}</h4>
    </a>
  ) : (
    <h4 className="card__title">{name}</h4>
  );

  const cardDemo = demoLink ? (
    <div className="card__demo">
      <FontAwesomeIcon icon={faDesktop} className="icon" />
      <a className="card__link-to-demo" href={demoLink} target="_blank" rel="noreferrer">
        Link to demo
      </a>
    </div>
  ) : null;

  return (
    <div className="card">
      {title}

      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
        }}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
      >
        {data.images.map((image) => {
          const imageSrc = `./src/assets/${image}.png`;
          return (
            <SwiperSlide>
              <img className="card__image" src={imageSrc} alt={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <p className="card__description">{description}</p>
      {cardDemo}
      <div className="card__source">
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <a className="card__link-to-src" href={codeLink} target="_blank" rel="noreferrer">
          Link to source code
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.instanceOf(Object),
};

Card.defaultProps = {
  data: {},
};

export default Card;
