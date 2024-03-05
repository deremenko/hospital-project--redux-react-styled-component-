import CustomButton from "../UI/CustomButton";
import CustomSelector from "../UI/CustomSelector";
import plusFilter from "../../img/plus.svg"
import { StyledSort } from "./styles";

const SortingForm = ({ 
  sortFieldName,
  sortDirectionOptions, 
  handleSortSelector,
  sortSettings,
  startFiltering,
  actionButton
}) => {
  return (
    <StyledSort>
      <CustomSelector
        name={"fieldName"}
        className="sorting-form-input"
        labelId="sortBy" 
        label="Сортировать по:"
        actionSelector={handleSortSelector}
        value={sortSettings.columnName}
        optionList={sortFieldName}
      />
      {sortSettings.fieldName !== "" && 
        <CustomSelector
          name="direction"
          className="sorting-form-input"
          labelId="direction" 
          label="Направление:"
          actionSelector={handleSortSelector}
          value={sortSettings.direction}
          optionList={sortDirectionOptions}
        />
      }
      {!startFiltering &&
        <CustomButton
          icon={plusFilter} 
          actionButton={actionButton}
          className="sorting-form-button" 
          nameIcon="plus" 
          type="button"  
        />
      }
    </StyledSort>
  );
}

export default SortingForm;