import axios from 'axios';
import React from 'react';
import ProfileForm from './ProfileForm';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';

class User extends React.Component {


  getProfile = async () => {
    //console.log('I am in the getprofile function');

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
          url: './profile',
          headers: { 'Authorization': `Bearer ${jwt}` }
        };
        let profileResults = await axios(config);
        profileResults=profileResults.data;
        console.log('Profile results from server',profileResults);
      }
    } catch (error) {
      // console.log('this is line 29 on frontend ',error);
    }
    //  console.log('I am done with getprofile function');
  };



  render() {
    // console.log('I am in the render');
    this.getProfile();
    return (
      <>
        <h1>WELCOME TO THE USER PAGE</h1>
        <Profile />
        <ProfileForm />
        {/* <SavedSearches /> */}
      </>
    );
  }
}
export default withAuth0(User);
