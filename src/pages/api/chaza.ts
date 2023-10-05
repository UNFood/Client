import axios from "axios";
import { Chaza } from "@/types/chaza";
import cookie from "js-cookie";

export function getChazas() {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get<Chaza[]>(`${BASE_URL}/api/v1/chazaz`, config);
}

export function getChaza() {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get<Chaza>(`${BASE_URL}/api/v1/chaza`, config);
}

export function createChaza(chaza: Chaza) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post<Chaza>(`${BASE_URL}/api/v1/chaza`, chaza, config);
}

export function updateChaza(chaza: Chaza) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.put<Chaza>(`${BASE_URL}/api/v1/chaza`, chaza, config);
}

export function deleteChaza(id: number) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.delete<Chaza>(`${BASE_URL}/api/v1/chaza/${id}`, config);
}
