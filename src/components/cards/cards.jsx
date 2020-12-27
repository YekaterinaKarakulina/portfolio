import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import Card from '../card';
import data from './cards-data';
import './cards.scss';

let count = 1;
const rslangImages = ['rslang2', 'rslang3', 'rslang4', 'rslang5', 'rslang6'];
const animalFarmImages = ['animalFarm2', 'animalFarm3'];
const movieSearchImages = ['movieSearch2', 'movieSearch3'];
const fancyWeatherImages = ['fancyWeather2', 'fancyWeather3', 'fancyWeather4', 'fancyWeather5'];
const englishForKidsImages = ['englishForKids2', 'englishForKids3'];
const xCheckImages = ['xcheck2', 'xcheck3', 'xcheck4', 'xcheck5'];
const virtualKeyboard = ['virtualKeyboard2', 'virtualKeyboard3'];
const singoloImages = ['singolo2', 'singolo3', 'singolo4', 'singolo5'];
const fridayLiveCodingImages = ['fridayLiveCoding2', 'fridayLiveCoding3', 'fridayLiveCoding4'];

class Cards extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  handleStateChange = () => {
    count += 1;
    if (count === 10) {
      this.setState({
        isLoading: false,
      });
      rslangImages.forEach((image) => data[0].images.push(image));
      animalFarmImages.forEach((image) => data[1].images.push(image));
      movieSearchImages.forEach((image) => data[2].images.push(image));
      fancyWeatherImages.forEach((image) => data[3].images.push(image));
      englishForKidsImages.forEach((image) => data[4].images.push(image));
      xCheckImages.forEach((image) => data[5].images.push(image));
      virtualKeyboard.forEach((image) => data[6].images.push(image));
      singoloImages.forEach((image) => data[7].images.push(image));
      fridayLiveCodingImages.forEach((image) => data[8].images.push(image));
    }
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="cards-wrapper">
        {isLoading && (
          <div className="spinner">
            <MoonLoader size={100} color=" #554497" />
          </div>
        )}
        <div className="cards">
          {data.map((item) => (
            <Card data={item} handleStateChange={this.handleStateChange} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
