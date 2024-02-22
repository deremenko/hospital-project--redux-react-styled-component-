import Reception from "../Reception";
import { 
  StyledTitle, 
  StyledTitleText, 
  StyledReceptionSection, 
  StyledReceptionTable,
} from "./styles";

const Receptions = ({ 
  receptions,
  headerOptions,
}) => {
  return (
    <StyledReceptionSection>
      <thead>
        <StyledTitle>
          {headerOptions.map((option) => (
            <StyledTitleText className={option.className}>{option.value}</StyledTitleText>
          ))}
        </StyledTitle>
      </thead>
      <StyledReceptionTable>
        {receptions.map((reception) => (
          <Reception reception = {reception} />
        ))}
      </StyledReceptionTable>
    </StyledReceptionSection>
  );
}

export default Receptions;