import axios from "axios";
import { Product } from "@/types/product";
import cookie from "js-cookie";

export function getProducts() {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get<Product[]>(`${BASE_URL}/api/v1/product`, config);
}
