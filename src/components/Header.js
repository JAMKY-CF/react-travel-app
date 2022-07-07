import '../css/Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Navdropdown from './Navdropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//import { Image } from 'react-bootstrap';
//import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  render() {


    return (
      <>
        <FontAwesomeIcon icon="facebook" />
        {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        <FontAwesomeIcon icon="fa-brands fa-pinterest" />
        <FontAwesomeIcon icon="fa-solid fa-link" /> */}
        <Navdropdown />
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        <img src="holder.js/100px180" />
      </>
    );
  }


}
export default withAuth0(Header);
