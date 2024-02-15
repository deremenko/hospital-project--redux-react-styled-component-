import { useState } from 'react';
import useActions from "../../../hook/useActions"
import Header from "../../Header";
import Form from "../../Form";
import Button from "../../Button";
import CustomInput from "../../UI/CustomInput";
import logoIcon from "../../../img/logo.png";
import { validatePassword } from "../../../helpers/validatePassword.js";
import { validateTextLength } from "../../../helpers/validateTextLength.js";
import { StyledMainZone, StyledImg, StyledContentContainer, StyledLink, StyledMainLaylout } from "./styles";

const Registration = () => { 
  const [newUser, setNewUser] = useState({ 
    login: { value: '', error: '' },
    password: { value: '', error: '' },
    repeatPassword: { value: '', error: '' },
  });

  const registration  = useActions();

  const handleInputChange = (newValue, key) => {
    setNewUser({
      ...newUser,
      [key]: { error: newUser[key].error, value: newValue },
    });
  };

  const createNewUser = () => {
    if (!validateTextLength(newUser.login.value)) {
      setNewUser({
        ...newUser,
        login: {
          error: "Требуется не менее 6 символов",
          value: newUser.login.value,
        },
      });

      return;
    }
    
    if (!validatePassword(newUser.password.value)) {
      setNewUser({
      ...newUser,
        password: {
          error: "Пароль должен состоять из латинских символов и содержать хотя бы одну цифру",
          value: newUser.password.value,
        },
      });

      return;
    }

    if (newUser.password.value !== newUser.repeatPassword.value) {
      setNewUser({
        ...newUser,
        repeatPassword: {
          error: "Пароли не совпадают",
          value: newUser.repeatPassword.value,
        },
      });
      return;
    }

    registration({
      login: newUser.login.value.trim(),
      password: newUser.password.value.trim(),
    });
  };

  return (
    <StyledMainLaylout>
      <Header />
      <StyledMainZone>
        <StyledImg src={logoIcon} alt="logo" />
        <StyledContentContainer>
          <Form title="Регистрация">
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
              idLabel="twoPassword" 
              placeholder="Пароль" 
              value={newUser.repeatPassword.value}
              handleInputChange={handleInputChange}
              name="repeatPassword" 
              type="password"
            />
            <Button textButton="Зарегистрироваться" actionButton={createNewUser} />
            <StyledLink href="">Авторизироваться</StyledLink>
          </Form>
        </StyledContentContainer>
      </StyledMainZone>
    </StyledMainLaylout>
  );
}

export default Registration;