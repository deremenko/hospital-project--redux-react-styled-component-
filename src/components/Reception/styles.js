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
  }
`;

const StyledTitleText = styled.th`
  font-size: 0.7em;
  margin: 10px;

  &.name-field {
    width: 25%;
  }

  &.doctor-field {
    width: 25%;
  }

  &.date-field {
    width: 15%;
  }

  &.complaint-field {
    width: 27%;
  }

  &.action-field {
    width: 9%;
  }
`;

const StyledReceptionTable = styled.tbody`
  min-height: 500px;
  background-color: rgb(255 255 255);
  border: 1px solid rgb(0 0 0);
`

const StyledContent = styled.td`
  padding: 5px;
  border-right: 1px solid rgb(0 0 0);
  min-height: 125px;
  font-size: 0.6em;
`

export { 
  StyledTitle, 
  StyledTitleText, 
  StyledReceptionTable, 
  StyledReceptionSection,
  StyledContent
};