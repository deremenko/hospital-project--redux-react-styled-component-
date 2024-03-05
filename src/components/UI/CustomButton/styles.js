import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  box-shadow: none;
  min-height: 30px;
  min-width: 30px;
  font-size: 0.45em;
  text-align: center;
  cursor: pointer;

  &.custom-button-body {
    padding: 10px;
    margin: 25px 0px 0px 0px;
    background-color: rgb(255, 255, 255);
    border-color: rgb(0 0 0 / 25%);
  }
`;

const StyledTextButton = styled.p`
  margin: 0px;
`;

export { StyledButton, StyledTextButton };