import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 125px;
  box-shadow: 0px 8px 15px 0px rgb(0 0 0 / 48%);

  .reception-form-input {
    margin: 0px 0px 20px 5px;
  }

  .reception-form-button {
    align-self: inherit;
    margin: 10px;
    min-width: 110px;
  }
`;

export { StyledForm };