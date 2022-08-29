import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { coinApi } from "../../../api/coinsApi";
import { Coin } from "../../../model/Coin";
import { AsyncStatus } from "../../../store/coins/type";
import { useAppDispatch } from "../../../store/store";
import { removeSelectedItem } from "../../../store/coins/slice";
import {
  ChartData,
  bgColors,
  strokeColors,
  mapChartData,
} from "./CoinCard.utils";
import {
  StyledCard,
  TitleCardContent,
  CoinName,
  ChartCardContent,
  RemoveIconButton,
} from "./CoinCard.styles";

export interface CoinCardProps {
  coin: Coin;
  colorIndex: number;
}

export const CoinCard = ({ coin, colorIndex }: CoinCardProps) => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<AsyncStatus>("pending");
  const [marketChart, setMarketChart] = useState<ChartData[]>([]);
  const marketChartValues = marketChart.map((m) => m.value);

  const handleRemove = useCallback(() => {
    dispatch(removeSelectedItem(coin.id));
  }, [coin]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinApi.getMarketChart(coin.id);
      return response;
    };

    fetchData()
      .then((response) => {
        setMarketChart(mapChartData(response));
        setStatus("succeeded");
      })
      .catch(() => setStatus("failed"));
  }, []);

  return (
    <StyledCard>
      <TitleCardContent sx={{ background: bgColors[colorIndex] }}>
        <CoinName>{coin.name}</CoinName>
      </TitleCardContent>
      <ChartCardContent sx={{ width: "340px" }}>
        {status === "failed" && <>Someting went wrong, try again later...</>}
        {status === "pending" && <CircularProgress />}
        {status === "succeeded" && (
          <LineChart
            width={380}
            height={120}
            data={marketChart}
            margin={{ top: 35, right: 50 }}
          >
            <Line
              type="linear"
              dataKey="value"
              stroke={strokeColors[colorIndex]}
              dot={false}
            />
            <XAxis dataKey="time" tick={false} />
            <YAxis
              tick={false}
              domain={[
                Math.min(...marketChartValues),
                Math.max(...marketChartValues),
              ]}
            />
          </LineChart>
        )}
        <RemoveIconButton onClick={handleRemove}>
          <Close />
        </RemoveIconButton>
      </ChartCardContent>
    </StyledCard>
  );
};
