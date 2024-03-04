import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import cancelFilter from "../../img/Bin.svg"
import { StyledFilter } from "./styles";

const DateFilterForm = ({ 
  dateRange,
  cancelAction,
  actionButton,
  handleInputFilterDate,
}) => {
  return (
    <StyledFilter>
      <CustomInput 
        type="date"
        handleInputChange={handleInputFilterDate}
        value={dateRange.startDate} 
        className="date-filter-form-input" 
        label="С:"
        name="startDate" 
      />
      <CustomInput 
        type="date" 
        value={dateRange.endDate} 
        handleInputChange={handleInputFilterDate}
        className="date-filter-form-input" 
        label="По:"
        name="endDate" 
      />
      <CustomButton
        textButton="Фильтровать"
        actionButton={actionButton}
        className="date-filter-form-button" 
        type="button"  
      />
      <CustomButton
        icon={cancelFilter}
        actionButton={cancelAction}
        nameIcon="bin"
        className="date-filter-form-button__icon" 
        type="button"  
      />
    </StyledFilter>
  );
}

export default DateFilterForm;