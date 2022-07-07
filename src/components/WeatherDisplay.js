import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wx: '',
    };
  }

  // required props - cityname , weatherData[] (.date and .description?)

  arrayOfCards = (day, idx) => {
    return (
      <Card className='weatherCard' key={idx} style={{ width: '25rem' }}>
        <Card.Img variant='top' src='' />
        <Card.Body>
          <Card.Title>{day.date}</Card.Title>
          <Card.Text>
            {day.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };


  render() {

    let weatherCards = this.props.weatherData.map((day, idx) => {
      return this.arrayOfCards(day, idx);
    });

    return (
      <>
        <h2>Here is the weather forecast for your destination city: </h2>
        <div className='weatherDiv'>
          {weatherCards}
        </div>
      </>
    );
  }



}

export default WeatherDisplay;
