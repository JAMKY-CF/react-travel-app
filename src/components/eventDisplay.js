import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class EventDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
    };
  }

  // required props - eventData[] (.img and .name and .url?)

  render() {

    let eventCards = this.props.eventData.map((day, idx) => {
      return (
        <div key={idx}>
          <Card className='eventCard'>
            <Card.Img variant='top' src='{this.props.eventData.img}' />
            <Card.Body>
              <Card.Title>{this.props.eventData.name}</Card.Title>
              <Card.Text>
                {day.description}
              </Card.Text>
              <Button variant="primary" href={this.props.eventData.url}>Link to TicketMaster</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });


    return (
      <>
        <h2> Here are the events happening in your destination city:</h2>
        <div className='eventsDiv'>
          {eventCards}
        </div>
      </>
    );
  }



}

export default EventDisplay;
