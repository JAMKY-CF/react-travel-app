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
        <>
          <Card key={idx} style={{ width: '25rem' }}>
            <Card.Img variant='top' src='{this.props.eventData.img}' />
            <Card.Body>
              <Card.Title>{this.props.eventData.name}</Card.Title>
              <Card.Text>
                {day.description}
              </Card.Text>
              <Button variant="primary" href={this.props.eventData.url}>Link to TicketMaster</Button>
            </Card.Body>
          </Card>
        </>
      );
    });


    return (
      <>
        {eventCards}
      </>
    );
  }



}

export default EventDisplay;
