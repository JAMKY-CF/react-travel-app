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

  render() {

    let weatherCards = this.props.weatherData.map((day, idx) => {
      return (
        <>
          <Card key={idx} style={{ width: '25rem' }}>
            <Card.Img variant='top' src='' />
            <Card.Body>
              <Card.Title>{day.date}</Card.Title>
              <Card.Text>
                {day.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      );
    });


    return (
      <>
        {weatherCards}
      </>
    );
  }



}

export default WeatherDisplay;
