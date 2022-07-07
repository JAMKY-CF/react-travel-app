import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function BasicButtonOne() {

  return (

    <DropdownButton id="dropdownBtn" title="Menu" variant='success'>
      <Dropdown.Item href="/user">Profile</Dropdown.Item>
      <Dropdown.Item href="/about">About</Dropdown.Item>
      <Dropdown.Item href="/">Home</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonOne;
