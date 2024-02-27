import styled from "styled-components";

const StyledMainLaylout = styled.div`
  background-color: rgba(197, 233, 255, 0.72);
  min-height: 100vh;

  .main-button {
    align-self: inherit;
    margin: 10px;
    min-width: 110px;
  }
`;

const StyledMainZone = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 700px;
`;

export { 
  StyledMainZone, 
  StyledMainLaylout 
};