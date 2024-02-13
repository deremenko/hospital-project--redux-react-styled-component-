import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../Header";
import InteractionZone from "../InteractionZone";
import StyledMainLaylout from "./styles";
import { sendObject } from "../../../store/actionCreators/registration"

const MainLaylout = () => {
  const [inputValues, setInputValues] = useState({ 
    login: '',
    password: '',
    repeatPassword: '',
  });

  const { login, password, repeatPassword } = inputValues;
  const dispatch = useDispatch();

  const sendRegistrationForm = () => {
    if (inputValues.password === inputValues.repeatPassword) {
      dispatch(sendObject({ login, password, repeatPassword }));
    };
  };

  const handleInputChange = (event) => {
    const key = event.target.name
    setInputValues((prevState) => ({
      ...prevState,
      [key]: event.target.value 
    }));
  };

  return (
    <StyledMainLaylout>
      <Header>
      </Header>
      <InteractionZone handleInputChange={handleInputChange} sendRegistrationForm={sendRegistrationForm}>
      </InteractionZone>
    </StyledMainLaylout>
  );
}

export default MainLaylout;