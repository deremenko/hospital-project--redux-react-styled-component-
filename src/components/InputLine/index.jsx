import { StyledInput, StyledInputLine } from "./styles";

const InputLine = ({ 
  label, 
  placeholder, 
  handleInputChange,
  nameFieldObject,
  typeInput 
}) => {
  return (
    <StyledInput>
      <label>{ label }</label>
      <StyledInputLine 
        placeholder={placeholder} 
        type={typeInput} 
        onChange={(event) => handleInputChange(event)}
        name={nameFieldObject}
      />
    </StyledInput>
  );
}

export default InputLine;