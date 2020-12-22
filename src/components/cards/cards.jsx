import React from 'react';
import Card from '../card';
import data from './cards-data';
import './cards.scss';

export default () => {
  return (
    <div className="cards-wrapper">
      <div className="cards">
        {data.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};
