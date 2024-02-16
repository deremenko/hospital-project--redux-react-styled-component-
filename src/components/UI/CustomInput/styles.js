import styled from 'styled-components';

const StyledInput = styled.div`
  height: 50px;
  width: 100%;
  font-size: 0.5em;
  margin: 0px 0px 20px;
`;

const StyledInputLine = styled.input`
  height: 38px;
  width: 100%;
  padding: 0px 0px 0px 10px;
  box-sizing: border-box;
`;

const StyledError = styled.span`
  color: #f22c3d;
  font-size: 0.4em;
`;

export { StyledInput, StyledInputLine, StyledError };