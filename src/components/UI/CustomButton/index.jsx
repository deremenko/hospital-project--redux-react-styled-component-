import { StyledButton, StyledTextButton} from './styles';

const CustomButton = ({ 
  textButton, 
  type, 
  icon, 
  nameIcon, 
  actionButton, 
  className }) => {
  return (
    <StyledButton type={type} onClick={actionButton} className={className}>
      {icon && <img src={icon} alt={nameIcon} />}
      <StyledTextButton>{textButton}</StyledTextButton>
    </StyledButton>
  );
}

export default CustomButton;