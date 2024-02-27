import CustomButton from "../UI/CustomButton";
import { 
  StyledContainer, 
  StyledHeader,
  StyledContent,
  StyledActionInterface 
} from './styles';

const ActionDialog = ({ 
  title, 
  confirmAction, 
  cancelAction, 
  confirmText, 
  cancelText,
  children 
}) => {
  return (
    <StyledContainer>
      <StyledHeader>
        {title}
      </StyledHeader>
      <StyledContent>
        {children}
      </StyledContent>
      <StyledActionInterface>
        <CustomButton 
          className="action-dialog-button"
          textButton={cancelText} 
          actionButton={cancelAction} 
          type="button"
        />
        <CustomButton 
          className="action-dialog-button"
          textButton={confirmText} 
          actionButton={confirmAction} 
          type="button"
        />
      </StyledActionInterface>
    </StyledContainer>
  );
}

export default ActionDialog;