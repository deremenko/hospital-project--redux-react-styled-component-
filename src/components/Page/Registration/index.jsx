import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from "../../Header";
import Form from "../../Form";
import CustomInput from "../../UI/CustomInput";
import ErrorSnackbar from "../../ErrorSnackbar"
import useActions from "../../../hook/useActions"
import { validateLatinWithMinDigits } from "../../../helpers/validateLatinWithMinDigits.js";
import { validateTextLength } from "../../../helpers/validateTextLength.js";
import logoIcon from "../../../img/logo.png";
import { 
  StyledMainZone, 
  StyledImg, 
  StyledContentContainer, 
  StyledMainLaylout 
} from "./styles";

const Registration = () => { 
  const [newUser, setNewUser] = useState({ 
    login: { value: '', error: '' },
    password: { value: '', error: '' },
    repeatPassword: { value: '', error: '' },
  });
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const errorFromBackend = useSelector((state) => state.user.error);
  const { registration }  = useActions();

  useEffect(() => {
    if (errorFromBackend) {
      setErrorOpen(true);
      setErrorMessage(errorFromBackend)
    }
  }, [errorFromBackend]);

  const handleInputChange = (newValue, key) => {
    setNewUser({
      ...newUser,
      [key]: { error: newUser[key].error, value: newValue },
    });
  };

  const createNewUser = () => {
    if (!validateTextLength(6, newUser.login.value)) {
      setNewUser({
        ...newUser,
        login: {
          error: "Требуется не менее 6 символов",
        },
      });

      return;
    }
    
    if (!validateLatinWithMinDigits(newUser.password.value)) {
      setNewUser({
      ...newUser,
        password: {
          error: "Пароль должен состоять из латинских символов и содержать хотя бы одну цифру",
        },
      });

      return;
    }

    if (newUser.password.value !== newUser.repeatPassword.value) {
      setNewUser({
        ...newUser,
        repeatPassword: {
          error: "Пароли не совпадают",
        },
      });
      return;
    }

    registration({
      login: newUser.login.value.trim(),
      password: newUser.password.value.trim(),
    });
  };

  const handleSnackbarClose = () => {
    setErrorOpen(false);
  };

  return (
    <StyledMainLaylout>
    <ErrorSnackbar 
      open={errorOpen} 
      handleClose={handleSnackbarClose} 
      errorMessage={errorMessage} 
    />
      <Header />
      <StyledMainZone>
        <StyledImg src={logoIcon} alt="logo" />
        <StyledContentContainer>
          <Form 
            title="Регистрация" 
            textLink="Авторизироваться"
            link="/authorization" 
            actionButton={createNewUser} 
            textButton="Зарегистрироваться"
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
            <CustomInput 
              label="Повторите пароль"
              error={newUser.repeatPassword.error}
              idLabel="repeatPassword" 
              placeholder="Пароль" 
              value={newUser.repeatPassword.value}
              handleInputChange={handleInputChange}
              name="repeatPassword" 
              type="password"
            />
          </Form>
        </StyledContentContainer>
      </StyledMainZone>
    </StyledMainLaylout>
  );
}

export default Registration;