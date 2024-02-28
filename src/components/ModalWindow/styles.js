import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 642px;

  .modal-window-button {
    align-self: inherit;
    margin: 10px;
    min-width: 110px;
  }
`;

const StyledHeader = styled.p`
  display: flex;
  align-items: center;
  height: 110px;
  margin-block: 0px;
  padding: 0px 0px  0px 25px;
  box-shadow: 0px 8px 15px 0px rgb(0 0 0 / 48%);
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;
  padding: 30px 20px 30px 20px;
  height: 45%;
`

const StyledActionInterface = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 110px;
  box-shadow: 0px -3px 15px 0px rgb(0 0 0 / 48%);

  button:nth-child(2) {
    background: rgba(197, 233, 255, 0.72);
    border: 0px;
  }

  button:nth-child(2):active{
    background: rgb(138 204 245 / 72%);
  }
`

export { 
  StyledContainer, 
  StyledHeader,
  StyledContent,
  StyledActionInterface 
};