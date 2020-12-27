/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Certificate = ({ id, format, name, alt, handleClick }) => {
  const classes = `img certificate ${format}`;
  const imageSrc = `./assets/${name}`;

  return <img data-id={id} className={classes} src={imageSrc} alt={alt} onClick={handleClick} />;
};

Certificate.propTypes = {
  id: PropTypes.number,
  format: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
  handleClick: PropTypes.func,
};

Certificate.defaultProps = {
  id: null,
  format: '',
  name: '',
  alt: '',
  handleClick: () => {},
};

export default Certificate;
