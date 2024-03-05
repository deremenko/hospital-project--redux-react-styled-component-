import styled from 'styled-components';

const StyledSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 95%;
  min-height: 115px;

  .sorting-form-input {
    align-items: center;
    flex-direction: row;
    margin: 0px 15px 0px 5px;
    width: 30%;
    min-height: 30px;
  }

  .sorting-form-button {
    border: none;
    background-color: rgb(213 239 255);
    margin: 0px;
  }
`;

export { StyledSort }