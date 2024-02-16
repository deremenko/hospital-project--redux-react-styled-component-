import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledForm = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  min-height: 453px;
  width: 400px;
  padding: 35px;
`;

const StyledHeader = styled.p`
 margin: 0px 0px 30px 30px
`
const StyledLink = styled(Link)`
  margin: 15px 0px 0px;
  font-size: 0.5em;
  color: black; 
  text-decoration: none;
  align-self: flex-end;
  cursor: pointer;
`;

export { 
  StyledForm, 
  StyledHeader, 
  StyledLink 
};