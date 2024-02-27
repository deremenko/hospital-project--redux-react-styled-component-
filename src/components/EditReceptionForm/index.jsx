import CustomTextArea from "../UI/CustomTextArea";
import CustomSelector from "../UI/CustomSelector";
import CustomInput from "../UI/CustomInput";
import { 
  StyledForm
} from './styles';

const EditReceptionForm = ({ 
  handleUpdateInputChange,
  doctorList,
  updateReception 
}) => {
  return (
    <StyledForm>
      <CustomInput  
        className="edit-reception-form-input" 
        label="Имя:"
        error={updateReception.name.error}
        handleInputChange={handleUpdateInputChange}
        value={updateReception.name.value}
        name="name"
        type="text"
      />
      <CustomSelector 
        actionSelector={handleUpdateInputChange} 
        name="doctor"
        labelId="doctorSelector" 
        label="Доктор:"
        optionList={doctorList}
        value={updateReception.doctor.value}
      />
      <CustomInput 
        type="date" 
        error={updateReception.date.error}
        handleInputChange={handleUpdateInputChange} 
        value={updateReception.date.value}
        className="edit-reception-form-input" 
        label="Дата:"
        name="date" 
      />
      <CustomTextArea
        label="Жалоба:"
        name="complaint"
        value={updateReception.complaint.value}
        error={updateReception.complaint.error}
        handleInputChange={handleUpdateInputChange} 
        />
    </StyledForm>
  );
}

export default EditReceptionForm;