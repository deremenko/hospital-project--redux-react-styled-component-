import { StyledSelector, StyledSelectorLine} from "./styles";

const CustomSelector = ({  
  label, 
  labelId, 
  optionList, 
  actionSelector,
  selectedOption, 
}) => {
  return (
    <StyledSelector>
      <label htmlFor={labelId}>{label}</label>
      <StyledSelectorLine 
        id={labelId} 
        onChange={actionSelector}
      >
        <option value="">Выберите...</option>
        {optionList.map((option) => (
          <option key={option.id} value={selectedOption}>
            {option.label}
          </option>
        ))}
      </StyledSelectorLine>
    </StyledSelector>
  );
};

export default CustomSelector;