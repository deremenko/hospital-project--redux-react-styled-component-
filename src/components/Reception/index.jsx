import CustomButton from "../UI/CustomButton";
import editIcon from "../../img/pen.svg"
import deleteIcon from "../../img/Bin.svg"
import { StyledTableColum } from './styles';

const Reception = ({ 
  reception, 
}) => {
  return (
<tr key={reception._id}>
  <StyledTableColum>{reception.patient}</StyledTableColum>
  <StyledTableColum>{reception.doctor}</StyledTableColum>
  <StyledTableColum>{reception.date.split('T')[0]}</StyledTableColum>
  <StyledTableColum>{reception.complaint}</StyledTableColum>
  <StyledTableColum>
    <CustomButton 
      icon={deleteIcon} 
      className="_icon"
      nameIcon="bin" 
      type="button"
    />
    <CustomButton 
      icon={editIcon} 
      className="_icon" 
      nameIcon="pen" 
      type="button"
    />
  </StyledTableColum>
</tr>
  );
}

export default Reception;