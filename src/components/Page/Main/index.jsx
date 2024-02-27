import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from "../../Header";
import ReceptionForm from "../../ReceptionForm";
import CustomButton from "../../UI/CustomButton";
import EditReceptionForm from "../../EditReceptionForm";
import ErrorSnackbar from "../../ErrorSnackbar"
import Receptions from "../../Receptions";
import Modal from "../../Modal";
import ActionDialog from "../../ActionDialog"
import useActions from "../../../hook/useActions"
import { updateObjectArray } from "../../../helpers/updateObjectArray"
import { doctorList, tableHeaderNames } from "../../../constants"
import { 
  StyledMainZone, 
  StyledMainLaylout 
} from "./styles";

const Main = () => { 
  const [idTargetReception, setIdTargetReception] = useState('');
  const [newReception, setNewReception] = useState({ 
    name: {value: '', error: '' },
    doctor: {value: '', error: '' },
    date: {value: '', error: ''},
    complaint: {value: '', error: ''}
  });

  const [updateReception, setUpdateReception] = useState({ 
    name: {value: '', error: '' },
    doctor: {value: '', error: '' },
    date: {value: '', error: ''},
    complaint: {value: '', error: ''}
  });

  const [modalsShow, setModalsShow] = useState({ 
    modal: false,
    editWindow: false,
  });

  const [error, setError] = useState({
    errorOpen: false,
    errorMessage: '',
  });

  const { error: errorFromBackend, receptions } = useSelector((state) => state.reception);

  const { loadUserReceptions, createReception, logout, changeReception }  = useActions();

  useEffect(() => {
    loadUserReceptions();
  }, []); 

  useEffect(() => {
    if (errorFromBackend) {
      setError({
        errorOpen: true,
        errorMessage: errorFromBackend,
      });
    }
  }, [errorFromBackend]);

  const handleInputChange = (newValue, key) => {
    setNewReception({
      ...newReception,
      [key]: { error: newReception[key].error, value: newValue },
    });
  };

  const handleUpdateInputChange = (newValue, key) => {
    setUpdateReception({
      ...updateReception,
      [key]: { error: newReception[key].error, value: newValue },
    });
  };

  const openEditModal = (id) => {
    const originalReception = receptions.find(item => item._id === id);
    
    setUpdateReception({
      name: {value: originalReception.patient, error: '' },
      doctor: {value: originalReception.doctor, error: '' },
      date: {value: originalReception.date, error: ''},
      complaint: {value: originalReception.complaint, error: ''}
    })

    setModalsShow({
      ...modalsShow, 
      editWindow: true,
      modal: true,
    });

    setIdTargetReception(id)
  };

  const addReception = () => {
    const currentDate = new Date();

    if (!newReception.name.value.trim()) {
      setNewReception({
        ...newReception,
        name: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }

    if (!newReception.doctor.value.trim()) {
      setNewReception({
        ...newReception,
        doctor: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }
    
    if (newReception.date.value < currentDate) {
      setNewReception({
        ...newReception,
        date: {
          error: "Нельзя выбирать прошедшее число",
        },
      });

      return;
    }

    if (!newReception.complaint.value.trim()) {
      setNewReception({
        ...newReception,
        complaint: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }

    createReception({
      patient: newReception.name.value.trim(),
      doctor: newReception.doctor.value.trim(),
      date: newReception.date.value.trim(),
      complaint: newReception.complaint.value.trim(),
    })

    setNewReception({
      name: {value: '', error: '' },
      doctor: {value: '', error: '' },
      date: {value: '', error: ''},
      complaint: {value: '', error: ''}
    });
  }

  const editReception = () => {
    const currentDate = new Date();
    
    if (!updateReception.name.value.trim()) {
      setUpdateReception({
        ...updateReception,
        name: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }

    if (!updateReception.doctor.value.trim()) {
      setUpdateReception({
        ...updateReception,
        doctor: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }
    
    if (updateReception.date.value < currentDate) {
      setUpdateReception({
        ...updateReception,
        date: {
          error: "Нельзя выбирать прошедшее число",
        },
      });

      return;
    }

    if (!updateReception.complaint.value.trim()) {
      setUpdateReception({
        ...updateReception,
        complaint: {
          error: "Строка не должна быть пустой",
        },
      });

      return;
    }

    const updatedOneReception = {
      patient: updateReception.name.value.trim(),
      doctor: updateReception.doctor.value.trim(),
      date: updateReception.date.value.trim(),
      complaint: updateReception.complaint.value.trim(),
    }

    const updatedReceptions = updateObjectArray(
      receptions, 
      idTargetReception, 
      updatedOneReception
    )

    changeReception(
      updatedOneReception, 
      updatedReceptions, 
      idTargetReception
    )

    setUpdateReception({
      name: {value: '', error: '' },
      doctor: {value: '', error: '' },
      date: {value: '', error: ''},
      complaint: {value: '', error: ''}
    });

    setModalsShow({
      deleteWindow: false, 
      editWindow: false,
      modal: false,
    });
  }

  return (
    <StyledMainLaylout>
      {modalsShow.modal && 
        <Modal>
          {modalsShow.editWindow && 
            <ActionDialog 
              title="Изменить прием"  
              confirmText="Сохранить"
              cancelText="Отмена"
              cancelAction={() => setModalsShow({...modalsShow, deleteWindow: false, modal: false})}
              confirmAction={editReception}
            >
              <EditReceptionForm 
                handleUpdateInputChange={handleUpdateInputChange}
                updateReception={updateReception}
                doctorList={doctorList}
               />
            </ActionDialog>
          }          
        </Modal>
      }      
      <ErrorSnackbar 
        open={error.errorOpen} 
        handleClose={() => setError({ ...error, errorOpen: false })}
        errorMessage={error.errorMessage} 
      />
      <Header>
        <CustomButton 
          actionButton={() => logout()}
          textButton="Выход"
          type="button"
          className="main-button"
        />
      </Header>
      <ReceptionForm 
        addReception={addReception} 
        handleInputChange={handleInputChange}
        newReception={newReception}
        doctorList = {doctorList}
      />
      <StyledMainZone>
        <Receptions
          tableHeaderNames={tableHeaderNames} 
          receptions={receptions}
          openEditModal={openEditModal}
        />
      </StyledMainZone>
    </StyledMainLaylout>
  );
}

export default Main;