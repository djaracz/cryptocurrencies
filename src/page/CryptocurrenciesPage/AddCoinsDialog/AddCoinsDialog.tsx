import { useCallback, useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setAddCoins } from "../../../store/dialog/slice";
import { Autocomplete } from "../../../component/Autocomplete/Autocomplete";
import { Coin } from "../../../model/Coin";
import { Button } from "../../../component/Button/Button.styles";
import { saveCryptocurrencies } from "../../../utils/cacheCryptocurrencies";
import { setSelectedItems } from "../../../store/coins/slice";
import {
  StyledDialogContent,
  CloseIconButton,
  StyledDialogActions,
  ChipsWrapper,
  StyledChip,
} from "./AddCoinsDialog.styles";

export const AddCoinsDialog = () => {
  const selectedItems = useAppSelector(({ coins }) => coins.selectedItems);
  const [selectedCoins, setSelectedCoins] = useState<Coin[]>(selectedItems);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(({ coins }) => coins.status === "pending");
  const coins = useAppSelector(({ coins }) => coins.items);

  const handleClose = useCallback(() => dispatch(setAddCoins(false)), []);
  const handleDelete = useCallback(
    (coinId: Coin["id"]) => () =>
      setSelectedCoins((coins) => coins.filter((c) => c.id !== coinId)),
    []
  );
  const handleSave = useCallback(() => {
    saveCryptocurrencies(selectedCoins);
    dispatch(setSelectedItems(selectedCoins));
    handleClose();
  }, [selectedCoins]);

  const allCurrenciesSelected = selectedCoins.length >= 5;

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>
        Add cryptocurrencies
        <CloseIconButton onClick={handleClose}>
          <Close />
        </CloseIconButton>
      </DialogTitle>
      <StyledDialogContent>
        <Autocomplete
          options={coins}
          loading={loading}
          values={selectedCoins}
          getOptionLabel={(c) => c.name}
          disabled={allCurrenciesSelected}
          onChange={(coins) => setSelectedCoins(coins)}
        />
        <ChipsWrapper>
          {selectedCoins.map((c) => (
            <StyledChip
              key={c.id}
              label={c.name}
              onDelete={handleDelete(c.id)}
            />
          ))}
        </ChipsWrapper>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button
          color="info"
          variant={allCurrenciesSelected ? "contained" : "outlined"}
          onClick={handleSave}
        >
          Save currencies
        </Button>
      </StyledDialogActions>
    </Dialog>
  );
};
