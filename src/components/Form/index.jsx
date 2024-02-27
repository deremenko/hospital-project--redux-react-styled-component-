import CustomButton from "../UI/CustomButton";
import { 
  StyledForm, 
  StyledHeader, 
  StyledLink 
} from './styles';

const Form = ({ 
  children, 
  title, 
  textLink, 
  link, 
  actionButton, 
  textButton, 
  type 
}) => {
  return (
    <StyledForm>
      <StyledHeader>{title}</StyledHeader>
      {children}
      <CustomButton 
        textButton={textButton} 
        actionButton={actionButton} 
        type={type}
      />
      <StyledLink to={link}>{textLink}</StyledLink>
    </StyledForm>
  );
}

export default Form;