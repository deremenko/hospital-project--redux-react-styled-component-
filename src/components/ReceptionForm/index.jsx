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
        className="reception-form-input-container input-container_horizontal-margin" 
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
        className="reception-form-input-container input-container_horizontal-margin" 
        label="Дата:"
        name="date" 
      />
      <CustomInput 
        type="text"
        error={newReception.complaint.error}
        handleInputChange={handleInputChange} 
        className="reception-form-input-container input-container_horizontal-margin" 
        label="Жалоба:" 
        value={newReception.complaint.value}
        name="complaint"
      />
      <CustomButton 
        textButton="Добавить" 
        className="reception-form-button-body button-body_big-size" 
        actionButton={addReception}
        type="button" 
      />
    </StyledForm>
  );
}

export default ReceptionForm;