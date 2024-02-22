import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from "../../Header";
import CustomInput from "../../UI/CustomInput";
import ReceptionForm from "../../ReceptionForm";
import CustomButton from "../../UI/CustomButton";
import ErrorSnackbar from "../../ErrorSnackbar"
import CustomSelector from "../../UI/CustomSelector";
import Reception from "../../Reception";
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

  const [selectedOption, setSelectedOption] = useState('');
  
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const errorFromBackend = useSelector((state) => state.user.error);
  const receptions = useSelector((state) => state.user.receptions);
  
  const { loadReceptions, createReception }  = useActions();

  useEffect(() => {
    loadReceptions();
  }, []); 

  useEffect(() => {
    if (errorFromBackend) {
      setErrorOpen(true);
      setErrorMessage(errorFromBackend)
    }
  }, [errorFromBackend]);

  const handleInputChange = (newValue, key) => {
    setNewReception({
      ...newReception,
      [key]: { error: newReception[key].error, value: newValue },
    });
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setNewReception({
      ...newReception,
      doctor: {
        value: selectedOption
      },
    })
    console.log(newReception.doctor.value)
  };

  const handleSnackbarClose = () => {
    setErrorOpen(false);
  };

  const clearValues = () => {
    setNewReception({
      name: {value: '', error: '' },
      doctor: {value: '', error: '' },
      date: {value: '', error: ''},
      complaint: {value: '', error: ''}
    });
  };

  const setReception = () => {
    createReception({
      patient: newReception.name.value.trim(),
      doctor: newReception.doctor.value.trim(),
      date: newReception.date.value,
      complaint: newReception.complaint.value,
    })

    clearValues();
  }

  return (
    <StyledMainLaylout>
      <ErrorSnackbar 
        open={errorOpen} 
        handleClose={handleSnackbarClose} 
        errorMessage={errorMessage} 
      />
      <Header>
      <CustomButton 
        textButton="Выход"
        type="button"
        className="big-size-button "
      />
      </Header>
      <ReceptionForm textButton="Добавить" actionButton={setReception}>
        <CustomInput 
          className="resectionInput" 
          label="Имя:"
          handleInputChange={handleInputChange}
          value={newReception.name.value}
          name="name"
          type="text"
        />
        <CustomSelector 
          actionSelector={handleSelectChange} 
          labelId="doctorSelector" 
          label="Доктор:"
          optionList={doctorList}
          value={selectedOption}
        />
        <CustomInput 
          type="date" 
          handleInputChange={handleInputChange} 
          value={newReception.date.value}
          className="resectionInput" 
          label="Дата:"
          name="date" 
        />
        <CustomInput 
          type="text"
          handleInputChange={handleInputChange} 
          className="resectionInput" 
          label="Жалоба:" 
          value={newReception.complaint.value}
          name="complaint"
        />
      </ReceptionForm>
      <StyledMainZone>
        <Reception 
          receptions={receptions}
        />
      </StyledMainZone>
    </StyledMainLaylout>
  );
}

export default Main;