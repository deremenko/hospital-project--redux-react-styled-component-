import CustomButton from "../UI/CustomButton";
import editIcon from "../../img/pen.svg"
import deleteIcon from "../../img/Bin.svg"
import { StyledTableColum } from './styles';

const Reception = ({ 
  reception, 
}) => {
  return (
    <tr>
      <StyledTableColum>{reception.patient}</StyledTableColum>
      <StyledTableColum>{reception.doctor}</StyledTableColum>
      <StyledTableColum>{reception.date.split('T')[0]}</StyledTableColum>
      <StyledTableColum>{reception.complaint}</StyledTableColum>
      <StyledTableColum>
        <CustomButton 
          icon={deleteIcon} 
          className="reception-button-body button-body_icon"
          nameIcon="bin" 
          type="button"
        />
        <CustomButton 
          icon={editIcon} 
          className="reception-button-body button-body_icon" 
          nameIcon="pen" 
          type="button"
        />
      </StyledTableColum>
    </tr>
  );
}

export default Reception;