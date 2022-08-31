import { AxiosResponse } from "axios";
import { Coin } from "../model/Coin";
import { apiClient } from "./apiClient";

const domain = "/coins";

const defaultListFilters =
  "vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";
const getList = async (): Promise<AxiosResponse<Coin[]>> => {
  return await apiClient.get(`${domain}/markets?${defaultListFilters}`);
};

export interface MarketChartDto {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}
export type MarketChartResponse = AxiosResponse<MarketChartDto>;

const defaultMarketChartFilters = "vs_currency=usd&days=1";
const getMarketChart = async (
  coinId: string,
  dailyInterval: boolean = false
): Promise<MarketChartResponse> => {
  return await apiClient.get(
    `${domain}/${coinId}/market_chart?${defaultMarketChartFilters}`
  );
};

export const coinApi = {
  getList,
  getMarketChart,
};
