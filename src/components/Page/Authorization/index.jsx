import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import Header from "../../Header";
import Form from "../../Form";
import CustomInput from "../../UI/CustomInput";
import ErrorSnackbar from "../../ErrorSnackbar"
import useActions from "../../../hook/useActions"
import logoIcon from "../../../img/logo.png";
import { 
  StyledMainZone, 
  StyledImg, 
  StyledContentContainer, 
  StyledMainLaylout 
} from "./styles";

const Authorization = () => { 
  const [newUser, setNewUser] = useState({ 
    login: { value: '', error: '' },
    password: { value: '', error: '' },
  });

  const [error, setError] = useState({
    errorOpen: false,
    errorMessage: '',
  });

  const errorFromBackend = useSelector((state) => state.user.error);
  const { authorization }  = useActions();

  useEffect(() => {
    if (errorFromBackend) {
      setError({
        errorOpen: true,
        errorMessage: errorFromBackend,
      });
    }
  }, [errorFromBackend]);

  const handleInputChange = (newValue, key) => {
    setNewUser({
      ...newUser,
      [key]: { error: newUser[key].error, value: newValue },
    });
  };

  const loginUser = () => {
    if (!newUser.login.value.trim()) {
      setNewUser({
        ...newUser,
        login: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }
    
    if (!newUser.password.value.trim()) {
      setNewUser({
      ...newUser,
        password: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }

    authorization({
      login: newUser.login.value.trim(),
      password: newUser.password.value.trim(),
    });
  };

  const handleSnackbarClose = () => {
    setError({
      ...error,
      errorOpen: false,
    });
  };

  return (
    <StyledMainLaylout>
      <ErrorSnackbar 
        open={error.errorOpen} 
        handleClose={handleSnackbarClose} 
        errorMessage={error.errorMessage} 
      />
      <Header />
      <StyledMainZone>
        <StyledImg src={logoIcon} alt="logo" />
        <StyledContentContainer>
          <Form 
            title="Войти в систему" 
            textLink="Зарегистрироваться"
            link = "/registration" 
            actionButton={loginUser} 
            textButton="Войти"
            type="button" 
          >
            <CustomInput 
              label="Логин" 
              error={newUser.login.error}
              idLabel="registerations"
              placeholder="Логин" 
              value={newUser.login.value}
              handleInputChange={handleInputChange}
              name="login"
              type="text"
            />
            <CustomInput 
              label="Пароль" 
              error={newUser.password.error}
              idLabel="password"
              placeholder="Пароль"
              value={newUser.password.value}
              handleInputChange={handleInputChange}
              name="password"
              type="password"
            />
          </Form>
        </StyledContentContainer>
      </StyledMainZone>
    </StyledMainLaylout>
  );
}

export default Authorization;