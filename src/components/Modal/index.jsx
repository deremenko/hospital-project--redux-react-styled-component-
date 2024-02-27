import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  StyledModalContent,
  StyledModalOverlay
} from "./styles";

const Modal = ({ children }) => {
  const body = document.body;


  return ReactDOM.createPortal(
    <StyledModalOverlay>
      <StyledModalContent>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>,
    body
  );
};

export default Modal;

