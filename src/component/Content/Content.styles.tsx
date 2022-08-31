import { styled } from "@mui/material/styles";
import { Toolbar, Typography, Box } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(`
  height: 70px;
  background-color: #fff;
  color: #000;
`);

export const StyledTypography = styled(Typography)(`
  flex-grow: 1;
`);

export const StyledBox = styled(Box)(`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`);
