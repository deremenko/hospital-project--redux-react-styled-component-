import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (WrappedComponent, authenticated) => {

  return (props) => {
    if (authenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <Redirect to="/authorization" />;
    }
  };
};

export default withAuthRedirect;
