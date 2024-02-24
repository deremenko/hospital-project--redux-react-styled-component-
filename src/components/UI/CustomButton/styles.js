import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  box-shadow: none;
  min-height: 30px;
  min-width: 30px;
  font-size: 0.45em;
  text-align: center;
  cursor: pointer;

  &.button-body {
    padding: 10px;
    margin: 25px 0px 0px 0px;
    background-color: rgb(255, 255, 255);
    border-color: rgb(0 0 0 / 25%);
  }

  &.button-body_big-size {
    align-self: inherit;
    margin: 10px;
    min-width: 110px;
  }

  &.button-body_icon {
    border: none;
    margin: 25px 10px 0px 10px;
  }
`;

const StyledTextButton = styled.p`
  margin: 0px;
`;

export { StyledButton, StyledTextButton };