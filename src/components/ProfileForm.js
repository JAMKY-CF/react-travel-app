import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  // remember to pass in user peramiter to this function
  handleLoggedInUser = async () => {
    console.log("this.props.user", this.props.user);
    // try {
    //   let url = `${process.env.REACT_APP_SERVER_URL}/users/${user.email}`;
    //   let userResponse = axios.get(url);
    //   userResonse
    //   console.log(userResponse.data);
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      // console.log('I am in the try block');
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        //   console.log('auth0 res: ',res);
        const jwt = res.__raw;
        //   console.log('JWT',jwt);
        let config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `./users/${this.props.user.email}`,
          headers: { 'Authorization': `Bearer ${jwt}` }
        };
        let profileResults = await axios(config);
        if (profileResults.data) {
          console.log('Profile results from server', profileResults);
          // populate <ProfileForm /> with their results
        }
        else {
          console.log("User not in Database");
          //populate blank <profileForm />  
        }
      }
    } catch (error) {
      console.log('didnt get profile by email', error);
    }








    // if(userResponse is they alraedy exist){
    // fill out form group
    // }
    // creat mongo profile here
  };


  render() {
    this.handleLoggedInUser(this.props.user);

    //api call to Profile.model find ({email:'userEmailfrom auth0'})
    // if unique email exists, get profile from mongo
    // else create(post) profile on mongo
    //  maybe!? offer option to update(put) profile on mongo




    return (
      <Form>
        <Form.Group className="userInfoForm" controlId="formUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name..." />
        </Form.Group>

        <Form.Group className="userInfoForm" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Email..." />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="userInfoForm" controlId="formAge">
          <Form.Label>Password</Form.Label>
          <Form.Control type="number" placeholder='0' min='0' max='150' />
        </Form.Group>

        <Form.Group className="userInfoForm" controlId="formPhone">
          <Form.Label>Telephone Number</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    );
  }
}
export default withAuth0(ProfileForm);
