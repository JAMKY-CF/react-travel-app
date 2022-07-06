
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Navdropdown from './Navdropdown';
//import { Image } from 'react-bootstrap';
//import ReactDOM from 'react-dom/client';

function Header() {

  return (
    <>
      <Navdropdown />
      <LoginButton />
      <LogoutButton />
      <img src="holder.js/100px180" />
    </>
  );

}
export default Header;
