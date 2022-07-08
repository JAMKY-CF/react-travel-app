import '../css/Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Navdropdown from './Navdropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

//import { Image } from 'react-bootstrap';
//import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  render() {


    return (
      <>
        <br/>
        <div>
          <a id="fb" href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjamky-react-travel-app-dev.netlify.app%2F&quote=">
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <br/>
          <a id="li" href = "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fjamky-react-travel-app-dev.netlify.app%2F">
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
          <br/>
          <a id="pin" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fjamky-react-travel-app-dev.netlify.app%2F&media=&description=">
            <FontAwesomeIcon icon={faPinterest}/>
          </a>
          <br/>
          <a id="link" href="https://www.shareaholic.com/share/copy/?link=https%3A%2F%2Fjamky-react-travel-app-dev.netlify.app%2F&title=&notes=">
            <FontAwesomeIcon icon={faLink}/>
          </a>
        </div>
        <img src="https://i.imgur.com/wLersBW.png" alt="Dream Vacations" />
        <Navdropdown />
        <br/>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </>
    );
  }


}
export default withAuth0(Header);
