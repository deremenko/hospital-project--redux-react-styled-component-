import styled from "styled-components";

const StyledMainLaylout = styled.div`
  background-color: rgba(197, 233, 255, 0.72);
  min-height: 100vh;
`;

const StyledMainZone = styled.div`
  display: grid;
  grid-template-areas: "logo actions";
  width: 100%;
  height: 830px;
  justify-items: center;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 550px;
  width: 550px;
  grid-area: logo ;
`;

const StyledContentContainer = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: actions;
`;

export { 
  StyledMainZone, 
  StyledImg, 
  StyledContentContainer, 
  StyledMainLaylout 
};