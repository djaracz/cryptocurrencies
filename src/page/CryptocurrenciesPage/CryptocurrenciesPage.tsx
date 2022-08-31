import { CircularProgress } from "@mui/material";
import { Fragment, useCallback, useEffect, useMemo } from "react";
import emptyStateImg from "../../img/empty_state.png";
import { loadCoins, setSelectedItems } from "../../store/coins/slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setAddCoins } from "../../store/dialog/slice";
import { getCachedCryptocurrencies } from "../../utils/cacheCryptocurrencies";
import {
  RootBox,
  NoCurrenciesParagraph,
  PleaseSelectParagraph,
  Link,
  StyledImg,
} from "./CryptocurrenciesPage.styles";
import { CoinCard } from "./CoinCard/CoinCard";

export const CryptocurrenciesPage = () => {
  const dispatch = useAppDispatch();
  const succeeded = useAppSelector(({ coins }) => coins.status === "succeeded");
  const failed = useAppSelector(({ coins }) => coins.status === "failed");
  const selectedItems = useAppSelector(({ coins }) => coins.selectedItems);

  const handleOpenAddDialog = useCallback(
    () => dispatch(setAddCoins(true)),
    [dispatch]
  );

  useEffect(() => {
    const cachedCryptocurrencies = getCachedCryptocurrencies();
    dispatch(loadCoins());

    if (cachedCryptocurrencies.length) {
      dispatch(setSelectedItems(cachedCryptocurrencies));
    }
  }, [dispatch]);

  const coinCards = useMemo(
    () =>
      selectedItems.map((c, i) => (
        <Fragment key={c.id}>
          <CoinCard coin={c} colorIndex={i} />
        </Fragment>
      )),
    [selectedItems]
  );

  if (failed) {
    return (
      <NoCurrenciesParagraph>
        Something went wrong. Please come again later...
      </NoCurrenciesParagraph>
    );
  }
  if (!succeeded) {
    return <CircularProgress color="info" />;
  }
  return (
    <RootBox>
      {selectedItems.length ? (
        coinCards
      ) : (
        <>
          <StyledImg src={emptyStateImg} alt="Empty state" />
          <NoCurrenciesParagraph>
            No cryptocurrencies selected.
          </NoCurrenciesParagraph>
          <PleaseSelectParagraph>
            Please <Link onClick={handleOpenAddDialog}>select</Link> up to 5
            currencies.
          </PleaseSelectParagraph>
        </>
      )}
    </RootBox>
  );
};
