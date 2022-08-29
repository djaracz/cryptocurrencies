import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
