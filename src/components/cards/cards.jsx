import React from 'react';
import Card from '../card';
import './cards.scss';

const data = [
  {
    name: 'RS lang',
    demoLink: 'https://yekaterinakarakulina-rslang.netlify.app/',
    codeLink: 'https://github.com/YekaterinaKarakulina/rslang',
    description:
      'RS lang - app for learning words with interval repetition technique, individual progress tracking and mini-games. Application use API with ability to create new users, users can have learning words, setting and statistics data.',
    images: [
      'rslang1',
      'rslang2',
      'rslang3',
      'rslang4',
      'rslang5',
      'rslang6',
      'rslang7',
      'rslang8',
      'rslang9',
      'rslang10',
      'rslang11',
      'rslang12',
    ],
  },
  {
    name: 'Animal farm',
    demoLink: 'https://yekaterinakarakulina-songbird.netlify.app/',
    codeLink: 'https://github.com/YekaterinaKarakulina/songbird',
    description:
      'Animal farm - single page application. Quiz to recognize animals, birds and insects by their voices.',
    images: ['animalFarm1', 'animalFarm2', 'animalFarm3'],
  },
  {
    name: 'Movie search',
    demoLink: 'https://yekaterinakarakulina-movie-search.netlify.app/',
    codeLink: 'https://github.com/YekaterinaKarakulina/RS2020Q1/tree/gh-pages/movie-search',
    description:
      'Movie search - single page application that displays movie information by user request. OMDb RESTful API is used to obtain information.',
    images: ['movieSearch1', 'movieSearch2', 'movieSearch3'],
  },

  {
    name: 'Fancy weather',
    demoLink: 'https://yekaterinakarakulina-fancy-weather.netlify.app/',
    codeLink: 'https://github.com/YekaterinaKarakulina/RS2020Q1/tree/gh-pages/fancy-weather',
    description:
      'Fancy weather - application for getting weather forecast. Various APIs are used to obtain data. The app can be used in 3 languages English, Russian and Belarusian.',
    images: ['fancyWeather1', 'fancyWeather2', 'fancyWeather3', 'fancyWeather4', 'fancyWeather5'],
  },

  {
    name: 'English for kids',
    demoLink: 'https://yekaterinakarakulina-english-for-kids.netlify.app/',
    codeLink: 'https://github.com/YekaterinaKarakulina/RS2020Q1/tree/gh-pages/english-for-kids',
    description:
      'English for kids - web application for studying English. All words divided into 8 categories. App has two modes: training - to learn new words, game - to play a game with learned words.',
    images: ['englishForKids1', 'englishForKids2', 'englishForKids3'],
  },

  {
    name: 'Virtual keyboard',
    demoLink: 'https://yekaterinakarakulina.github.io/virtual-keyboard/',
    codeLink: 'https://github.com/YekaterinaKarakulina/virtual-keyboard',
    description:
      'All html generated dynamically. JS: DOM manipulation and event handlers practice.',
    images: ['virtualKeyboard1', 'virtualKeyboard2', 'virtualKeyboard3'],
  },

  {
    name: 'Singolo',
    demoLink: 'https://yekaterinakarakulina.github.io/singolo/',
    codeLink: 'https://github.com/YekaterinaKarakulina/singolo',
    description:
      'Pixel perfect layout and styling based on PSD model. Responsive layout (SASS).DOM actions (JS basics).',
    images: ['singolo1', 'singolo2', 'singolo3', 'singolo4', 'singolo5'],
  },

  {
    name: 'Friday Live Coding',
    demoLink: 'https://yekaterinakarakulina.github.io/friday-live-coding/index.html',
    codeLink: 'https://github.com/YekaterinaKarakulina/friday-live-coding',
    description:
      'Landing page "Friday Live Coding". Responsive layout and styling based on Figma model for fixed screen resolutions: 1440px, 768px, 375px.',
    images: ['fridayLiveCoding1', 'fridayLiveCoding2', 'fridayLiveCoding3', 'fridayLiveCoding4'],
  },
];
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
