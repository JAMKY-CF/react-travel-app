import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';



class CreatorCards extends React.Component {

  render() {
    let creators = [
      { name: 'Kris Dunning', pitch: 'Hello my name is Kris. I am a full-stack web developer with experience in the MERN stack. I am an Air Force veteran who specialized in communications and personnel coordination. I have my associate degrees in electronics and electrical generation and control. I fell in love with programming while on parental leave when my daughter was born. I knew that the tech industry was where I needed to be and enrolled in the Code Fellows full stack web development bootcamp.', linkedIn: 'https://www.linkedin.com/in/krisdunning/', gitHub: 'https://github.com/KrisDunning', src: 'https://i.imgur.com/Oh2rEvD.jpg'},
      { name: 'Yajahira Velazquez', pitch: 'Hello my name Yajahira Velazquez , I am a full-stack software developer with a focus in Java. I am an army veteran with a background in policing, transportation management, and medicine. Currently I own a web design company, where I offer services from web design to digital marketing. I started my company because I love working with computers. Computers have given me the opportunity to unlock my creative side and critical thinking. I have always been a problem solver so working in tech, is solving one problem after the next. This is an area where I excel. More importantly, I feel that tech is the way of the future and I want to be part of that. ', linkedIn: 'https://www.linkedin.com/in/dtcs21/', gitHub: 'https://github.com/firecracker80', src: 'https://i.imgur.com/lMCvI2e.jpg'},
      { name: 'Faustino Marco Simpliciano', pitch: 'Hello I\'m Marco! I am a software developer with a focus in Advanced Python programming. My background is in the service industry, where I spent almost 10 years honing technical and interpersonal skills that make me a great speaker, listener, and compassionate confidante. I have a knack for foreign language acquisition and I love to travel and learn about our planet and the people living on it. I want to help others, and outside of the volunteer work I do I want to serve my community and the world at large by making use of my ability to listen, learn fast, create and implement plans. I want programming to become the medium through which I help others change the world.', linkedIn: 'https://www.linkedin.com/in/faustino-marco/', gitHub: 'https://github.com/Faustino-Marco', src: 'https://i.imgur.com/RPaAcm6.png'},
      { name: 'Jamall Malik', pitch: 'Hello I’m Jamall! I am a software developer specializing in advanced Python Development. My background is in Health Admin in the US Air Force,  I separated from the Air Force in September of 2021.My main goal  is to become an excellent Software Engineer and have an instinct impact on the company I work for. In my freetime I enjoy watching basketball.', linkedIn: 'https://www.linkedin.com/in/jamall-malik-1b9239220/', gitHub: 'https://github.com/JamallM1', src: 'https://i.imgur.com/TJtS5Mk.jpg'},
      { name: 'Alec Torres', pitch: 'I am a software developer. After graduating from high school in 2019, I am a software developerI decided to attend college at Stony Brook University for 2 years before moving on from it. I did not know what to do after that but knew I couldn\'t sit around and do nothing. After searching for alternatives Code Fellows seemed to be an answer towards building a foundation for my young adulthood. I am hoping all this hard work pays off and I can continue to build my life brick-by-brick. I enjoy reading books, playing video games, and playing basketball but try to make time to learn something new every day. I can be very competitive and it adds to making these activities even more enjoyable.', linkedIn: 'https://www.linkedin.com/in/alec-torres-380b63230/', gitHub: 'https://github.com/atorresla24', src: 'https://i.imgur.com/9O8So0h.jpg'}
    ];
    let creatorCards = creators.map((person, idx) => {
      return (
        <>
          <Card className="mb-4" key={idx} border="info"style={{ width: '25rem', height: '53rem'}}>
            <Card.Img variant='top' src={person.src} />
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <a href ={person.linkedIn}>
                <FontAwesomeIcon className= "m-1"icon={faLinkedinIn}/>
              </a>
              <a href ={person.gitHub}>
                <FontAwesomeIcon className="m-1"icon={faGithub}/>
              </a>
              <br/><br/>
              <Card.Text>
                {person.pitch}
              </Card.Text>
              {/* <Button variant="primary" href={person.linkedIn}>LinkedIn</Button> */}
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
