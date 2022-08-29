import { Coin } from "../model/Coin";

const cachedCryptocurrencies = "cached-cryptocurrencies";

export const saveCryptocurrencies = (coins: Coin[]) => {
  localStorage.setItem(cachedCryptocurrencies, JSON.stringify(coins));
};

export const getCachedCryptocurrencies = (): Coin[] => {
  return JSON.parse(localStorage.getItem(cachedCryptocurrencies) ?? "[]");
};
