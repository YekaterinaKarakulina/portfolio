import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderLink = ({ iconName, text, link }) => {
  const content = link ? (
    <div>
      <FontAwesomeIcon icon={iconName} className="icon" />
      <a className="link" href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  ) : (
    <div>
      <FontAwesomeIcon icon={iconName} className="icon" />
      {text}
    </div>
  );
  return <>{content}</>;
};

HeaderLink.propTypes = {
  iconName: PropTypes.instanceOf(Object),
  text: PropTypes.string,
  link: PropTypes.string,
};

HeaderLink.defaultProps = {
  iconName: {},
  text: '',
  link: '',
};

export default HeaderLink;
