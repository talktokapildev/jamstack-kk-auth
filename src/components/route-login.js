import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';

const RouteLogin = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate('/dashboard/secret', { replace: true });
  }

  return (
    <div>
      <h1>Login or Sign up</h1>
      <button onClick={showModal}>Log In</button>
    </div>
  );
};

export default RouteLogin;
