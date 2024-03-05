import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 115px;
  box-shadow: 0px 8px 15px 0px rgb(0 0 0 / 48%);
`;

const StyledImg = styled.img`
  height: 45px;
  width: 45px;
  margin: 0px 0px 0px 50px;
`;

const StyledTitle = styled.p`
  padding: 0px 0px 0px 75px;
  flex: 1;
`

export { StyledHeader, StyledImg, StyledTitle }