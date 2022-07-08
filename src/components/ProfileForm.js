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
      profileFormData: '',
    };
  }

  handleLoggedInUser = async () => {
    console.log("this.props.user", this.props.user);

    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        let config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `./users/${this.props.user.email}`,
          headers: { 'Authorization': `Bearer ${jwt}` }
        };
        let profileResults = await axios(config);
        profileResults=profileResults.data;
        if (profileResults) {
          console.log('Profile results from server', profileResults);
          let profileFormData = this.populateProfileForm(profileResults);
          this.setState({
            profileFormData: profileFormData
          });
        }
        else {
          console.log("User not in Database"); 
          let profileFormData = this.populateProfileForm(this.props.user);
          this.setState({
            profileFormData: profileFormData
          });
        }
      }
    } catch (error) {
      console.log('didnt get profile by email', error);
    }
  };




  populateProfileForm = (profileResults) => {
    console.log('profile results in populate form: ',profileResults);
    return (
      <>
        <img src={profileResults.picture} alt={profileResults.name} />
        <Form>
          <Form.Group className="userInfoForm" controlId="formUsername">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={profileResults.name} placeholder="Name..." />
          </Form.Group>

          <Form.Group className="userInfoForm" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" defaultValue={profileResults.email} placeholder="Email..." />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="userInfoForm" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" defaultValue={profileResults.age} min='0' max='150' />
          </Form.Group>

          <Form.Group className="userInfoForm" controlId="Location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </>
    );
  };

  render() {
    if(!this.state.profileFormData)
      this.handleLoggedInUser();

    //api call to Profile.model find ({email:'userEmailfrom auth0'})
    // if unique email exists, get profile from mongo
    // else create(post) profile on mongo
    //  maybe!? offer option to update(put) profile on mongo




    return (
      <>
        {this.state.profileFormData}
      </>

    );
  }
}
export default withAuth0(ProfileForm);
