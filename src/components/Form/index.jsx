import { StyledForm, StyledP } from './styles';

const Form = ({ children, title }) => {
  return (
    <StyledForm>
      <StyledP>{title}</StyledP>
      {children}
    </StyledForm>
  );
}

export default Form;