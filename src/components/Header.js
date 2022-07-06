
import React from 'react';
import LoginButton from './LoginButton';
import Navdropdown from './Navdropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//import { Image } from 'react-bootstrap';
//import ReactDOM from 'react-dom/client';

function Header() {

  return (
    <>
      <FontAwesomeIcon icon="facebook" />
      {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      <FontAwesomeIcon icon="fa-brands fa-pinterest" />
      <FontAwesomeIcon icon="fa-solid fa-link" /> */}
      <Navdropdown />
      <LoginButton />
      <img src="holder.js/100px180" />
    </>
  );

}
export default Header;
