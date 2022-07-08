import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileForm from './ProfileForm';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ?
      (
        <>
          <ProfileForm user={user} />
        </>
      )
      : <h2>Please login to view profile</h2>

  );
};

export default Profile;
