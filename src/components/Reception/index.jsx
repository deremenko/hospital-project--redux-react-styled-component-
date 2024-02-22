import CustomButton from "../UI/CustomButton";
import editIcon from "../../img/pen.svg"
import deleteIcon from "../../img/Bin.svg"
import { 
  StyledTitle, 
  StyledTitleText, 
  StyledReceptionSection, 
  StyledReceptionTable,
  StyledContent 
} from "./styles";

const Reception = ({ 
  receptions
}) => {

  return (
    <StyledReceptionSection>
      <thead>
        <StyledTitle>
          <StyledTitleText className="name-field">Имя</StyledTitleText>
          <StyledTitleText className="doctor-field">Доктор</StyledTitleText>
          <StyledTitleText className="date-field">Дата</StyledTitleText>
          <StyledTitleText className="complaint-field">Жалоба</StyledTitleText>
          <StyledTitleText className="action-field"></StyledTitleText>
        </StyledTitle>
      </thead>
      <StyledReceptionTable>
        {receptions.map((reception) => (
          <tr key={reception._id}>
            <StyledContent>{reception.patient}</StyledContent>
            <StyledContent>{reception.doctor}</StyledContent>
            <StyledContent>{reception.date.split('T')[0]}</StyledContent>
            <StyledContent>{reception.complaint}</StyledContent>
            <StyledContent>
              <CustomButton 
                icon={deleteIcon} 
                className="icon-button"
                nameIcon="bin" 
                type="button"
              />
              <CustomButton 
                icon={editIcon} 
                className="icon-button" 
                nameIcon="pen" 
                type="button"
              />
            </StyledContent>
          </tr>
        ))}
      </StyledReceptionTable>
    </StyledReceptionSection>
  );
}

export default Reception;