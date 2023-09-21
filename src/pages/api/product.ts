import axios from "axios";
import { Product } from "../../types/product";
import cookie from "js-cookie";

export function getProducts() {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:7628";
  const token = cookie.get("x-access-token");
  const config = {
    headers: {
      "x-access-token": token,
    },
  };
  return axios.get<Product[]>(`${BASE_URL}/api/v1/product`, config);
}
