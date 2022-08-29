import { MarketChartResponse } from "../../../api/coinsApi";

export interface ChartData {
  timeStamp: number;
  value: number;
}

export const mapChartData = (response: MarketChartResponse): ChartData[] =>
  response.data.prices.map((a) => ({
    timeStamp: a[0],
    value: a[1],
  }));

export const bgColors = ["#2196f3", "#ff5722", "#009688", "#e91e63", "#651fff"];

export const strokeColors = [
  "#1769aa",
  "#b23c17",
  "#00695f",
  "#a31545",
  "#4615b2",
];
