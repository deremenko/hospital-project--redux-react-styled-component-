import CustomButton from "../UI/CustomButton";
import { StyledForm } from "./styles";

const ReceptionForm = ({ children, textButton, actionButton}) => {

  return (
    <StyledForm>
      {children}
      <CustomButton 
        textButton={textButton} 
        className="big-size-button" 
        actionButton={actionButton}
      />
    </StyledForm>
  );
}

export default ReceptionForm;