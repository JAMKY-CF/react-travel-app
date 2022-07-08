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
        profileResults = profileResults.data;
        if (profileResults) {
          let profileFormData = this.populateProfileForm(profileResults);
          this.setState({
            profileFormData: profileFormData
          });
        }
        else {
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
    return (
      <>
        <img src={this.props.user.picture} alt={profileResults.name} />
        <Form onSubmit={this.handleFormSave}>
          <Form.Group className="userInfoForm" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={profileResults.name} placeholder="Name..." />
          </Form.Group>

          <Form.Group className="userInfoForm" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control readOnly={true} type="email" defaultValue={profileResults.email} placeholder="Email..." />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="userInfoForm" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" defaultValue={profileResults.age} min='0' max='150' />
          </Form.Group>

          <Form.Group className="userInfoForm" controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" defaultValue={profileResults.location} />
          </Form.Group>         
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </>
    );
  };


  handleFormSave = async (event) => {
    event.preventDefault();
    // take value of form inputs. populate the form with those values with a constructed profileResults object
    let savedFormProfileObject = { name: event.target.formName.value, email: event.target.formEmail.value, age: event.target.formAge.value, location: event.target.formLocation.value };

    let backendURL = `${process.env.REACT_APP_SERVER_URL}/users/${event.target.formEmail.value}`;
    try {
      await axios.put(backendURL, savedFormProfileObject);
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    if (!this.state.profileFormData)
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
