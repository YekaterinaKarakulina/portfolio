import React from 'react';
import Header from '../header';
import ProfessionalInfo from '../professional-info';
import Cards from '../cards';
import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <ProfessionalInfo />
      <Cards />
    </>
  );
};

export default React.memo(App);
