import { StyledTextArea, StyledTextAreaBody, StyledError } from "./styles";

function CustomTextArea({ 
  idLabel, 
  label, 
  handleInputChange,
  value,
  name,
  error
}) {
  return (
    <StyledTextArea>
      <label htmlFor={idLabel}>
        {label}
      </label>
      <StyledTextAreaBody
        id={idLabel}
        value={value}
        name={name}
        onChange={(event) => handleInputChange(event.target.value, event.target.name)}
        rows="4"
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledTextArea>
  );
}

export default CustomTextArea;