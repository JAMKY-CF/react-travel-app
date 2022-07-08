import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCards: '',
    };
  }
  // pass city name from search field from form
  // required props - cityname , weatherData[] (.date and .description?)
  handleWeather = async () => {
    let backendURL = `${process.env.REACT_APP_SERVER_URL}/Weather?cityName=${this.props.cityName}`;
    try {
      let returnedWeatherData = await axios.get(backendURL);
      returnedWeatherData = returnedWeatherData.data;
      console.log("This is WX data from backed: ", returnedWeatherData);
      //returnedweatherdata .date and .description
      let weatherCards = returnedWeatherData.map((day, idx) => {
        return this.arrayOfCards(day, idx);
      });
      console.log('array of wx cards', weatherCards);
      this.setState({
        weatherCards: weatherCards,
      });
      // return weatherCards;
    } catch (error) {
      console.log(error.message);
    }
  };

  arrayOfCards = (day, idx) => {
    return (
      <Card className='weatherCard' key={idx} style={{ width: '20rem' }}>
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
    if(!this.state.weatherCards)
      this.handleWeather();


    return (
      <>
        <h2>Destination forecast: </h2>
        <div className='weatherDiv'>
          {this.state.weatherCards}

        </div>
      </>
    );
  }



}

export default WeatherDisplay;
