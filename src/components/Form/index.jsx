import { StyledForm, StyledHeader } from './styles';

const Form = ({ children, title }) => {
  return (
    <StyledForm>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </StyledForm>
  );
}

export default Form;