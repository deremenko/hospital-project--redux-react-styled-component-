import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ErrorSnackbar = ({ open, handleClose, errorMessage }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {errorMessage}
      </MuiAlert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
