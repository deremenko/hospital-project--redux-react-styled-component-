import styled from 'styled-components';

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 95%;
  min-height: 80px;

  .date-filter-form-input {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0px 15px 0px 5px;
    width: 30%;
    min-height: 30px;
  }

  .date-filter-form-button {
    align-self: inherit;
    margin: 10px;
    min-width: 110px;
  }

  .date-filter-form-button__icon {
    border: none;
    background-color: rgb(213 239 255);
    margin: 0px;
  }
`;

export { StyledFilter }