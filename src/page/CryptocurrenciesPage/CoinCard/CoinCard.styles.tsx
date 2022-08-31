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
  flex-direction: column;
`);

export const ChartCardContent = styled(CardContent)(`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 340px;
`);

export const CoinName = styled(Typography)(`
  color: #ffffff;
  font-size: 18px;
`);

export const Price = styled(Typography)(`
  color: #ffffff;
  font-size: 16px;
`);

export const RemoveIconButton = styled(IconButton)(`
  position: absolute;
  right: 8px;
  top: 8px;
`);
