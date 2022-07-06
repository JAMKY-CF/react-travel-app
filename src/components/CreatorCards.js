import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class CreatorCards extends React.Component {

  render() {
    let creators = [
      { name: 'Kris Dunning', pitch: 'I love to code and am pretty decent.', linkedIn: 'https://www.linkedin.com/in/krisdunning/' ,imgURL:''},
      { name: 'Jamall Malik', pitch: 'I love to code and am pretty decent.', linkedIn: '#' ,imgURL:''},
      { name: 'Yajahira Velazquez', pitch: 'I love to code and am pretty decent.', linkedIn: '#' ,imgURL:''},
      { name: 'Faustino Marco Simpliciano', pitch: 'I love to code and am pretty decent.', linkedIn: '#',imgURL:''}
    ];
    let creatorCards = creators.map((person,idx) => {
      return (
        <>
          <Card key={idx} style={{ width: '25rem' }}>
            <Card.Img variant='top' src='src/images/pexels-rompalli-harish-2315807.jpg'/>
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <Card.Text>
                {person.description}
              </Card.Text>
              <Button variant="primary" href={person.linkedIn}>LinkedIn</Button>
            </Card.Body>
          </Card>
        </>
      );
    });
    return (
      <>
        {creatorCards}
      </>
    );
  }
}

export default CreatorCards;
