import Reception from "../Reception";
import { 
  StyledTitle, 
  StyledTitleText, 
  StyledReceptionSection, 
  StyledReceptionTable,
} from "./styles";

const Receptions = ({ 
  receptions,
  tableHeaderNames,
  openEditModal 
}) => {
  return (
    <StyledReceptionSection>
      <thead>
        <StyledTitle>
          {tableHeaderNames.map((name, index) => (
            <StyledTitleText key={index}>{name.value}</StyledTitleText>
          ))}
        </StyledTitle>
      </thead>
      <StyledReceptionTable>
        {receptions.map((reception) => (
          <Reception 
            key={reception._id} 
            reception = {reception} 
            openEditModal={openEditModal}
          />
        ))}
      </StyledReceptionTable>
    </StyledReceptionSection>
  );
}

export default Receptions;