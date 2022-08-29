import { Coin } from "../../model/Coin";

export type AsyncStatus = "idle" | "pending" | "succeeded" | "failed";

export interface CoinsState {
  status: AsyncStatus;
  items: Coin[];
  selectedItems: Coin[];
}
