import React from 'react';
import Header from '../header';
import Cards from '../cards';
import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
};

export default React.memo(App);
