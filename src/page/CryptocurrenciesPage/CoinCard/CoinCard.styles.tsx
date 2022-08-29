import { styled } from "@mui/material/styles";
import { Card, CardContent, IconButton, Typography } from "@mui/material";

export const StyledCard = styled(Card)(`
  display: flex;
  flex-direction: row;
  height: 130px;
  width: 600px;
  margin-bottom: 24px
`);

export const TitleCardContent = styled(CardContent)(`
  flex: 1;
  display: flex;
  align-items: center;
  `);

export const ChartCardContent = styled(CardContent)(`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`);

export const CoinName = styled(Typography)(`
  color: #ffffff;
  font-size: 18px;
`);

export const RemoveIconButton = styled(IconButton)(`
  position: absolute;
  right: 8px;
  top: 8px;
`);
