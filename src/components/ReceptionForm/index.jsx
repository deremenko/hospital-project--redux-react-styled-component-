import CustomButton from "../UI/CustomButton";
import { StyledForm } from "./styles";

const ReceptionForm = ({ children }) => {

  return (
    <StyledForm>
      {children}
    </StyledForm>
  );
}

export default ReceptionForm;