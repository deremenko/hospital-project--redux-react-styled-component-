import { StyledInput, StyledInputLine, StyledError } from "./styles";

const CustomInput = ({ 
  idLabel,
  label, 
  value,
  error,
  placeholder, 
  handleInputChange,
  name,
  className,
  type 
}) => {
  return (
    <>
      <StyledInput className={`custom-input-container ${className}`}>
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
        {error && <StyledError>{error}</StyledError>}
      </StyledInput>

    </>
  );
}

export default CustomInput;