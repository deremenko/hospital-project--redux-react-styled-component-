import { StyledInput, StyledInputLine, StyledError } from "./styles";

const CustomInput = ({ 
  idLabel,
  label, 
  value,
  error,
  placeholder, 
  handleInputChange,
  name,
  type 
}) => {
  return (
    <StyledInput>
      <label htmlFor={idLabel}>
        {label}
        {error && <StyledError>{` ${error}`}</StyledError>}
      </label>
      <StyledInputLine 
        id={idLabel}
        placeholder={placeholder} 
        type={type} 
        value={value}
        onChange={(event) => handleInputChange(event.target.value, event.target.name)}
        name={name}
      />
    </StyledInput>
  );
}

export default CustomInput;