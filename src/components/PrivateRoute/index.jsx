import React from 'react';
import Authorization from '../Page/Authorization';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ WrappedComponent }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  
  if (isAuth) {
    return WrappedComponent;
  } 

  return <Authorization />;
};

export default PrivateRoute;
