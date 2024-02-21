import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = (WrappedComponent) => {
  const isAuth = useSelector((state) => state.isAuth);

  return (props) => {
    if (isAuth) {
      return <WrappedComponent {...props} />;
    } 

    return <Redirect to="/authorization" />;
  };
};

export default PrivateRoute;