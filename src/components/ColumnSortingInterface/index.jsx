import CustomSelector from "../UI/CustomSelector";
import { StyledColumnSort } from "./styles";

const ColumnSortingInterface = ({ 
  sortFieldName,
  sortDirectionOptions, 
  setSortColumnName,
  sortColumnName,
  setSortDirection,
  sortDirection
}) => {
  return (
    <StyledColumnSort>
      <span>Сортироват по:</span>
      <CustomSelector
        className="column-sorting-interface-input"
        actionSelector={setSortColumnName}
        value={sortColumnName}
        optionList={sortFieldName}
      />
      {sortColumnName !== "None" && 
      <>
        <span>Направление:</span>
        <CustomSelector
          className="column-sorting-interface-input"
          actionSelector={setSortDirection}
          value={sortDirection}
          optionList={sortDirectionOptions}
        />
      </>  
      }
    </StyledColumnSort>
  );
}

export default ColumnSortingInterface;