import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import Header from "../../Header";
import ReceptionForm from "../../ReceptionForm";
import CustomButton from "../../UI/CustomButton";
import EditReceptionModal from "../../EditReceptionModal";
import DeleteReceptionModal from '../../DeleteReceptionModal';
import SortingForm from "../../SortingForm"
import DateFilterForm from '../../DateFilterForm';
import ErrorSnackbar from "../../ErrorSnackbar"
import Receptions from "../../Receptions";
import useActions from "../../../hook/useActions";
import { sortArray } from "../../../helpers/sortArray";
import { filterValuesInRange } from "../../../helpers/filterValuesInRange"
import { 
  doctorList, 
  tableHeaderNames, 
  sortFieldName,
  sortDirectionOptions,
  defaultTime 
} from "../../../constants"
import { 
  StyledMainZone, 
  StyledMainLaylout 
} from "./styles";

const Main = () => { 
  const [idUpdatedReception, setIdTargetReception] = useState(null);
  const [newReception, setNewReception] = useState({ 
    name: { value: '', error: '' },
    doctor: { value: '', error: '' },
    date: { value: '', error: '' },
    complaint: { value: '', error: '' }
  });

  const [updateReception, setUpdateReception] = useState({ 
    name: { value: '', error: '' },
    doctor: { value: '', error: '' },
    date: { value: '', error: '' },
    complaint: { value: '', error: '' }
  });

  const [sortSettings, setSortSettings] = useState({
    fieldName: '',
    direction: 'По возрастанию',
  });

  const [startFiltering, setStartFiltering] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });
  

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [error, setError] = useState({
    errorOpen: false,
    errorMessage: '',
  });

  const receptionSelector = createSelector(
    state => state.reception,
    receptionState => ({
      error: receptionState.error,
      receptions: receptionState.receptions,
    })
  );

  const { error: errorFromBackend, receptions } = useSelector(receptionSelector);
  const [backupOfReceptions, setBackupOfReceptions] = useState([]);
  
  const { 
    loadUserReceptions, 
    createReception, 
    logout, 
    editUserReception, 
    deleteUserReception 
  } = useActions();

  useEffect(() => {
    if (receptions) {
      setBackupOfReceptions([...receptions]);
    }
  }, [receptions]);

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

  const handleSortSelector = (newValue, key) => {
    setSortSettings({
      ...sortSettings,
      [key]: newValue,
    });
  };

  const handleInputFilterDate = (newValue, key) => {
    setDateRange({
      ...dateRange,
      [key]: newValue
    });
  };

  const sortReceptions = () => {
    if (sortSettings.fieldName && sortSettings.direction) {
      return sortArray(backupOfReceptions, sortSettings.fieldName, sortSettings.direction)
    } 
    return backupOfReceptions   
  };

  const cancelFilterReceptions = () => {
    setStartFiltering(false)
    setDateRange({
      startDate: '',
      endDate: '',
    })
    setBackupOfReceptions(receptions)
  };

  const filterDateReceptions = () => {
    const filteredReceptions = filterValuesInRange(
      receptions, 
      "date", 
      dateRange.startDate, 
      dateRange.endDate + defaultTime
    );
  
    setBackupOfReceptions([...filteredReceptions]);
  };
  
  
  const openEditModal = (id) => {
    const originalReception = receptions.find(item => item._id === id);
    
    setIsOpenEditModal(true);

    setUpdateReception({
      name: { value: originalReception.patient, error: '' },
      doctor: { value: originalReception.doctor, error: '' },
      date: { value: originalReception.date, error: '' },
      complaint: { value: originalReception.complaint, error:'' }
    })

    setIdTargetReception(id)
  };

  const openDeleteModal = (id) => {
    setIdTargetReception(id);
    setIsOpenDeleteModal(true);
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
      date: newReception.date.value.split('T')[0],
      complaint: newReception.complaint.value.trim(),
    })

    setNewReception({
      name: { value: '', error: '' },
      doctor: { value: '', error: '' },
      date: { value: '', error: '' },
      complaint: { value: '', error: '' }
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

    editUserReception(
      updatedOneReception, 
      idUpdatedReception
    )

    setUpdateReception({
      name: { value: '', error: '' },
      doctor: { value: '', error: '' },
      date: { value: '', error: '' },
      complaint: { value: '', error: '' }
    });

    setIsOpenEditModal(false);
  }

  const deleteReception = () => {
    deleteUserReception(idUpdatedReception)

    setIsOpenDeleteModal(false)
  }

  return (
    <StyledMainLaylout>            
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
      <SortingForm 
        sortFieldName={sortFieldName} 
        sortDirectionOptions={sortDirectionOptions}
        handleSortSelector={handleSortSelector}
        sortSettings={sortSettings}
        startFiltering={startFiltering}
        actionButton={() => setStartFiltering(true)}
      />
      {startFiltering && 
        <DateFilterForm 
          dateRange={dateRange}
          cancelAction={cancelFilterReceptions}
          actionButton={filterDateReceptions}
          handleInputFilterDate={handleInputFilterDate}
        />
      }
      <StyledMainZone>
        <Receptions
          tableHeaderNames={tableHeaderNames} 
          receptions={sortReceptions()}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />
      </StyledMainZone>
      {isOpenEditModal && 
        <EditReceptionModal 
          handleUpdateInputChange={handleUpdateInputChange}
          updateReception={updateReception}
          doctorList={doctorList}
          cancelAction={() => setIsOpenEditModal(false)}
          editReception={editReception}
        />
      } 
      {isOpenDeleteModal && 
        <DeleteReceptionModal 
          cancelAction={() => setIsOpenDeleteModal(false)}
          deleteReception={deleteReception}
        />
      } 
    </StyledMainLaylout>
  );
}

export default Main;