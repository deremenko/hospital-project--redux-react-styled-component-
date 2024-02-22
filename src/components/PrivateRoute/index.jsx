import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ WrappedComponent }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  
  if (isAuth) {
    return WrappedComponent;
  } 

  return <Navigate to="/authorization" />;
};

export default PrivateRoute;
