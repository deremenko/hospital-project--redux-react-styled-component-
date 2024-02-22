import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from "../../Header";
import CustomInput from "../../UI/CustomInput";
import ReceptionForm from "../../ReceptionForm";
import CustomButton from "../../UI/CustomButton";
import ErrorSnackbar from "../../ErrorSnackbar"
import CustomSelector from "../../UI/CustomSelector";
import Receptions from "../../Receptions";
import useActions from "../../../hook/useActions"
import { doctorList } from "../../../constants"
import { 
  StyledMainZone, 
  StyledMainLaylout 
} from "./styles";

const Main = () => { 
  const [newReception, setNewReception] = useState({ 
    name: {value: '', error: '' },
    doctor: {value: '', error: '' },
    date: {value: '', error: ''},
    complaint: {value: '', error: ''}
  });

  const tableHeaderOptions = [
    {value: 'Имя', className: '_name'},
    {value: 'Доктор', className: '_doctor'},
    {value: 'Дата', className: '_date'},
    {value: 'Жалоба', className: '_complaint'},
    {value: '', className: '_action'},  
  ]

  const [error, setError] = useState({
    errorOpen: false,
    errorMessage: '',
  });

  const errorFromBackend = useSelector((state) => state.reception.error);
  const receptions = useSelector((state) => state.reception.receptions);
  
  const { fetchReceptions, submitReception }  = useActions();

  useEffect(() => {
    fetchReceptions();
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
    
    if (!newReception.date.value < currentDate) {
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

    submitReception({
      patient: newReception.name.value.trim(),
      doctor: newReception.doctor.value.trim(),
      date: newReception.date.value,
      complaint: newReception.complaint.value,
    })

    setNewReception({
      name: {value: '', error: '' },
      doctor: {value: '', error: '' },
      date: {value: '', error: ''},
      complaint: {value: '', error: ''}
    });
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
          textButton="Выход"
          type="button"
          className="_big-size"
        />
      </Header>
      <ReceptionForm >
        <CustomInput 
          className="_horizontal-margin" 
          label="Имя:"
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
          handleInputChange={handleInputChange} 
          value={newReception.date.value}
          className="_horizontal-margin" 
          label="Дата:"
          name="date" 
        />
        <CustomInput 
          type="text"
          handleInputChange={handleInputChange} 
          className="_horizontal-margin" 
          label="Жалоба:" 
          value={newReception.complaint.value}
          name="complaint"
        />
        <CustomButton 
          textButton="Добавить" 
          className="_big-size" 
          actionButton={addReception}
        />
      </ReceptionForm>
      <StyledMainZone>
        <Receptions
          headerOptions = {tableHeaderOptions} 
          receptions={receptions}
        />
      </StyledMainZone>
    </StyledMainLaylout>
  );
}

export default Main;