import { useNavigate } from 'react-router-dom';  
import { useEffect } from 'react';  
import { useSelector } from 'react-redux';

const AuthorizationRoute = ({ outlet, path }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      return navigate(path);
    }
  }, [isAuth]);

  return outlet;
};

export default AuthorizationRoute;