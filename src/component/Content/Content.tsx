import { ReactNode, useCallback } from "react";
import { AppBar } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyledToolbar, StyledTypography, StyledBox } from "./Content.styles";
import { AddCoinsDialog } from "../../page/CryptocurrenciesPage/AddCoinsDialog/AddCoinsDialog";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAddCoins } from "../../store/dialog/slice";
import { Button } from "../Button/Button.styles";

export interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  const dispatch = useAppDispatch();
  const addCoinsDialogOpen = useAppSelector((state) => state.dialog.addCoins);

  const handleOpenAddDialog = useCallback(
    () => dispatch(setAddCoins(true)),
    []
  );

  return (
    <>
      <AppBar position="static">
        <StyledToolbar variant="dense">
          <StyledTypography variant="h6" color="inherit">
            Cryptocurrencies
          </StyledTypography>
          <Button
            variant="contained"
            color="info"
            startIcon={<AddCircleIcon />}
            onClick={handleOpenAddDialog}
          >
            Add cryptocurrencies
          </Button>
        </StyledToolbar>
      </AppBar>
      <StyledBox>{children}</StyledBox>
      {addCoinsDialogOpen && <AddCoinsDialog />}
    </>
  );
};
