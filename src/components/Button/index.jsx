import { StyledButton} from './styles';

const Button = ({ textButton, icon, nameIcon, actionButton }) => {
  return (
    <StyledButton onClick={actionButton}>
      <img src={icon} alt={nameIcon} />
      <span>{textButton}</span>
    </StyledButton>
  );
}

export default Button;