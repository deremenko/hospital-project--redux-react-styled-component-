import ModalWindow from "../ModalWindow";
import { 
  StyledText
} from './styles';

const DeleteReceptionModal = ({ 
  cancelAction,
  deleteReception
}) => {
  return (
    <ModalWindow 
      title="Удалить прием"  
      confirmText="Удалить"
      cancelText="Отмена"
      cancelAction={cancelAction}
      confirmAction={deleteReception}
    >
      <StyledText>Вы действительно хотите удалить прием?</StyledText>
    </ModalWindow>
  );
}

export default DeleteReceptionModal;