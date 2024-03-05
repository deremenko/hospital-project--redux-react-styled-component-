import { StyledSelector, StyledSelectorLine, StyledLabel } from "./styles";

const CustomSelector = ({  
  label, 
  labelId, 
  name, 
  optionList, 
  actionSelector,
  selectedOption, 
  value,
  className
}) => {
  return (
    <StyledSelector className={className}>
      <StyledLabel htmlFor={labelId}>{label}</StyledLabel>
      <StyledSelectorLine 
        id={labelId} 
        onChange={(event) => actionSelector(event.target.value, event.target.name)}
        name={name}
      >
        <option>{value}</option>
        {optionList.map((option) => (
          <option key={option.id} value={option.value ? option.value : selectedOption}>
            {option.label}
          </option>
        ))}
      </StyledSelectorLine>
    </StyledSelector>
  );
};

export default CustomSelector;