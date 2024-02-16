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
    <>
      <StyledInput>
        <label htmlFor={idLabel}>
          {label}
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
      {error && <StyledError>{error}</StyledError>}
    </>
  );
}

export default CustomInput;