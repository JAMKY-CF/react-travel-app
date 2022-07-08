import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EventDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: '',
    };
  }


  handleEvents = async () => {
    console.log('handleEvents fired');
    let backendURL = `${process.env.REACT_APP_SERVER_URL}/Entertainment?cityName=${this.props.cityName}`;
    try {
      let returnedEventData = await axios.get(backendURL);
      returnedEventData = returnedEventData.data;
      console.log("This is EVENT data from backed: ", returnedEventData);
      let eventCards = returnedEventData.map((event, idx) => {
        return this.arrayOfCards(event, idx);
      });
      console.log('array of EVENT cards', eventCards);
      this.setState({
        events: eventCards,
      });
    } catch (error) {
      console.log(error.message);
    }

  };

  arrayOfCards = (event, idx) => {
    return (
      <div key={idx}>
        <Card className='eventCard'>
          <Card.Img variant='top' src={event.img_url} />
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>
              {event.dateTime}
            </Card.Text>
            <Button variant="primary" href={event.url}>Link to TicketMaster</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };



  render() {
    this.handleEvents();

    return (
      <>
        <h2> Destination events:</h2>
        <div className='eventsDiv'>
          {this.state.events}
        </div>
      </>
    );
  }



}

export default EventDisplay;
