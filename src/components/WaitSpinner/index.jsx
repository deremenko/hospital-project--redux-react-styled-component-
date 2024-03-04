import CircularProgress from '@mui/material/CircularProgress';
import { StyledSpinnerBox } from "./styles";

const WaitSpinner = () => {
  return (
    <StyledSpinnerBox>
      <CircularProgress />
    </StyledSpinnerBox>
  );
};

export default WaitSpinner;
