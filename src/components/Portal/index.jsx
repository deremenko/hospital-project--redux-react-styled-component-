import React from 'react';
import ReactDOM from 'react-dom';
import { 
  StyledModal
} from "./styles";

const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    <StyledModal>
      {children}
    </StyledModal>,
    document.body
  );
};

export default Portal;

