import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import Card from '../card';
import data from './cards-data';
import './cards.scss';

let count = 1;

class Cards extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  handleStateChange = () => {
    count += 1;
    if (count === 38) {
      this.setState({
        isLoading: false,
      });
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
