import axios from "axios";
import { Product , ProductCreate, ProductUpdate} from "@/types/product";
import cookie from "js-cookie";

export function getProducts() {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get<{ message: string; data: Product[] }>(
      `${BASE_URL}/api/v1/product/products`,
      config
    )
    .then((res) => res.data);
}

export function getProduct(id: string) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get<{ message: string; data: Product }>(
      `${BASE_URL}/api/v1/product/${id}`,
      config
    )
    .then((res) => res.data);
}

export function createProduct(chaza: ProductCreate) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .post<Product>(`${BASE_URL}/api/v1/product`, chaza, config)
    .then((res) => res.data);
}

export function updateProduct(chaza: ProductUpdate) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.put<Product>(`${BASE_URL}/api/v1/product`, chaza, config);
}

export function deleteChaza(id: number) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.delete<Product>(`${BASE_URL}/api/v1/product/${id}`, config);
}
