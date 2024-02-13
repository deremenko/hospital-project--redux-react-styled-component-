import { StyledInteractionZone, StyledImg, StyledContentContainer, StyledLink } from "./styles";
import Form from "../../Form";
import Button from "../../Button";
import InputLine from "../../InputLine";
import logoIcon from "../../../img/logo.png";

const InteractionZone = ({ handleInputChange, sendRegistrationForm }) => {
  return (
    <StyledInteractionZone>
      <StyledImg src={logoIcon} alt="logo" />
      <StyledContentContainer>
        <Form title="Регистрация">
          <InputLine 
            label="Логин" 
            placeholder="Логин" 
            handleInputChange={handleInputChange}
            nameFieldObject="login"
            typeInput="text"
          />
          <InputLine 
            label="Пароль" 
            placeholder="Пароль"
            handleInputChange={handleInputChange} 
            nameFieldObject="password"
            typeInput="password"
          />
          <InputLine 
            label="Повторите пароль" 
            placeholder="Пароль" 
            handleInputChange={handleInputChange}
            nameFieldObject="repeatPassword" 
            typeInput="password"
          />
          <Button textButton="Зарегистрироваться" actionButton={sendRegistrationForm} />
          <StyledLink href="">Авторизироваться</StyledLink>
        </Form>
      </StyledContentContainer>
    </StyledInteractionZone>
  );
}

export default InteractionZone;