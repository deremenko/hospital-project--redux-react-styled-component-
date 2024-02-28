import ModalWindow from "../ModalWindow";
import CustomTextArea from "../UI/CustomTextArea";
import CustomSelector from "../UI/CustomSelector";
import CustomInput from "../UI/CustomInput";
import { 
  StyledForm
} from './styles';

const EditReceptionModal = ({ 
  handleUpdateInputChange,
  doctorList,
  updateReception,
  cancelAction,
  editReception 
}) => {
  return (
    <ModalWindow 
      title="Изменить прием"  
      confirmText="Сохранить"
      cancelText="Отмена"
      cancelAction={cancelAction}
      confirmAction={editReception}
    >
      <StyledForm>
        <CustomInput  
          className="edit-reception-modal-input" 
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
          className="edit-reception-modal-input" 
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
    </ModalWindow>
  );
}

export default EditReceptionModal;