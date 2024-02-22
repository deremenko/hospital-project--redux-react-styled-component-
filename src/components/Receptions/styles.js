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
`;

const StyledTitleText = styled.th`
  font-size: 0.7em;
  margin: 10px;

  &._name {
    width: 25%;
  }

  &._doctor {
    width: 25%;
  }

  &._date {
    width: 15%;
  }

  &._complaint {
    width: 27%;
  }

  &._action {
    width: 9%;
  }
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