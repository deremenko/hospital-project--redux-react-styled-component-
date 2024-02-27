import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from "../../Header";
import ReceptionForm from "../../ReceptionForm";
import CustomButton from "../../UI/CustomButton";
import ErrorSnackbar from "../../ErrorSnackbar"
import Receptions from "../../Receptions";
import useActions from "../../../hook/useActions"
import { doctorList, tableHeaderNames } from "../../../constants"
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

  const [error, setError] = useState({
    errorOpen: false,
    errorMessage: '',
  });

  const { error: errorFromBackend, receptions } = useSelector((state) => state.reception);

  const { loadUserReceptions, createReception, logout }  = useActions();

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
      <StyledMainZone>
        <Receptions
          tableHeaderNames={tableHeaderNames} 
          receptions={receptions}
        />
      </StyledMainZone>
    </StyledMainLaylout>
  );
}

export default Main;