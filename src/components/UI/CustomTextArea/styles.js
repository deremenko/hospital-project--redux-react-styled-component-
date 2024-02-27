import styled from 'styled-components';

const StyledTextArea = styled.div`
  font-size: 0.5em;
  margin: 0px 0px 20px 5px;

`;

const StyledTextAreaBody = styled.textarea`
  width: 98%;
  padding: 15px 0px 15px 15px;
  resize: vertical;
`;

const StyledError = styled.div`
  display: block;
  color: #f22c3d;
  font-size: 0.8em;
`;

export { StyledTextArea, StyledTextAreaBody, StyledError };