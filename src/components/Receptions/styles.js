import styled from 'styled-components';

const StyledReceptionSection = styled.table`
  width: 95%;
  min-height: 100px;
  margin: 20px 0px 0px 0px;
  padding: 1px 0px;
  border-collapse: collapse;
`;

const StyledTitle = styled.tr`
  height: 100px;
  margin: 0px;
  background-color: rgba(196, 196, 196, 1);

  th:nth-child(1) {
    width: 25%;
  }

  th:nth-child(2) {
    width: 25%;
  }  

  th:nth-child(3) {
    width: 15%;
  }

  th:nth-child(4) {
    width: 27%;
  }

  th:nth-child(5) {
    width: 9%;
  }
`;

const StyledTitleText = styled.th`
  font-size: 0.7em;
  margin: 10px;
`;

const StyledReceptionTable = styled.tbody`
  min-height: 500px;
  background-color: rgb(255 255 255);
  border: 1px solid rgb(0 0 0);
`

export { 
  StyledTitle, 
  StyledTitleText, 
  StyledReceptionTable, 
  StyledReceptionSection,
};