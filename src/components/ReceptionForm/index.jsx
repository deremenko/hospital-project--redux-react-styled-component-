import CustomButton from "../UI/CustomButton";
import CustomSelector from "../UI/CustomSelector";
import CustomInput from "../UI/CustomInput";
import { StyledForm } from "./styles";

const ReceptionForm = ({ 
  addReception, 
  handleInputChange, 
  newReception, 
  doctorList 
}) => {
  return (
    <StyledForm>
      <CustomInput  
        className="reception-form-input" 
        label="Имя:"
        error={newReception.name.error}
        handleInputChange={handleInputChange}
        value={newReception.name.value}
        name="name"
        type="text"
      />
      <CustomSelector 
        actionSelector={handleInputChange} 
        name="doctor"
        labelId="doctorSelector" 
        label="Доктор:"
        optionList={doctorList}
        value={newReception.doctor.value}
      />
      <CustomInput 
        type="date" 
        error={newReception.date.error}
        handleInputChange={handleInputChange} 
        value={newReception.date.value}
        className="reception-form-input" 
        label="Дата:"
        name="date" 
      />
      <CustomInput 
        type="text"
        error={newReception.complaint.error}
        handleInputChange={handleInputChange} 
        className="reception-form-input" 
        label="Жалоба:" 
        value={newReception.complaint.value}
        name="complaint"
      />
      <CustomButton 
        textButton="Добавить" 
        className="reception-form-button" 
        actionButton={addReception}
        type="button" 
      />
    </StyledForm>
  );
}

export default ReceptionForm;