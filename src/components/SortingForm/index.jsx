import CustomSelector from "../UI/CustomSelector";
import { StyledSort } from "./styles";

const SortingForm = ({ 
  sortFieldName,
  sortDirectionOptions, 
  handleSortSelector,
  sortSettings
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
      <>
        <CustomSelector
          name="direction"
          className="sorting-form-input"
          labelId="direction" 
          label="Направление:"
          actionSelector={handleSortSelector}
          value={sortSettings.direction}
          optionList={sortDirectionOptions}
        />
      </>  
      }
    </StyledSort>
  );
}

export default SortingForm;