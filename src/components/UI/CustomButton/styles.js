import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgb(255, 255, 255);
  border-color: rgb(0 0 0 / 25%);
  border-radius: 5px;
  box-shadow: none;
  min-height: 30px;
  min-width: 30px;
  padding: 10px;
  margin: 25px 0px 0px 0px;
  font-size: 0.45em;
  text-align: center;
  align-self: flex-end;
  cursor: pointer;

  &._big-size {
    align-self: inherit;
    margin: 10px;
    min-width: 110px;
  }

  &._icon {
    border: none;
    align-self: center;
    margin: 25px 10px 0px 10px;
  }
`;

const StyledTextButton = styled.p`
  margin: 0px;
`;

export { StyledButton, StyledTextButton };