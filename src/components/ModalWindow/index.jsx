import Portal from "../Portal";
import CustomButton from "../UI/CustomButton";
import { 
  StyledContainer, 
  StyledHeader,
  StyledContent,
  StyledActionInterface 
} from './styles';

const ModalWindow = ({ 
  title, 
  confirmAction, 
  cancelAction, 
  confirmText, 
  cancelText,
  children 
}) => {
  return (
  <Portal>
    <StyledContainer>
      <StyledHeader>
        {title}
      </StyledHeader>
      <StyledContent>
        {children}
      </StyledContent>
      <StyledActionInterface>
        <CustomButton 
          className="modal-window-button"
          textButton={cancelText} 
          actionButton={cancelAction} 
          type="button"
        />
        <CustomButton 
          className="modal-window-button"
          textButton={confirmText} 
          actionButton={confirmAction} 
          type="button"
        />
      </StyledActionInterface>
    </StyledContainer>
  </Portal>  
  );
}

export default ModalWindow;