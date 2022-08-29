import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RootBox = styled(Box)(`
  max-width: 740px;
  display: flex;
  flex-direction: column;
`);

export const NoCurrenciesParagraph = styled("p")(`
  margin-top: 40px;
  margin-bottom: 0;
  font-size: 20px;
  text-align: center;
`);

export const PleaseSelectParagraph = styled("p")(`
  font-size: 20px;
  margin-top: 8px;
`);

export const Link = styled("a")(`
  font-size: 20px;
  color: #0288d1;
  cursor: pointer;
`);

export const StyledImg = styled("img")(`
  margin: 40px 0 12px;
`);
