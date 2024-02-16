import { StyledButton, StyledTextButton} from './styles';

const CustomButton = ({ textButton, type, icon, nameIcon, actionButton }) => {
  return (
    <StyledButton type={type} onClick={actionButton}>
      {icon && <img src={icon} alt={nameIcon} />}
      <StyledTextButton>{textButton}</StyledTextButton>
    </StyledButton>
  );
}

export default CustomButton;