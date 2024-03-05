import styled from 'styled-components';

const StyledSelector = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  width: 100%;
  font-size: 0.5em;
  margin: 0px 0px 18px 5px;
`;

const StyledLabel = styled.label`
  margin: 0px 5px 0px 0px;
`

const StyledSelectorLine = styled.select`
  width: 100%;
  height: 38px;
`;

export { StyledSelector, StyledSelectorLine, StyledLabel };