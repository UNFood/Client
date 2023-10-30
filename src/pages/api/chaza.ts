import axios from "axios";
import { Chaza, ChazaCreate, ChazaUpdate } from "@/types/chaza";
import cookie from "js-cookie";
import { Location } from "@/types/chaza";

export function getChazas() {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get<{ message: string; data: Chaza[] }>(
      `${BASE_URL}/api/v1/chaza/chazas`,
      config
    )
    .then((res) => res.data);
}

export function getChaza(id: string) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get<{ message: string; data: Chaza }>(
      `${BASE_URL}/api/v1/chaza/byId/${id}`,
      config
    )
    .then((res) => res.data);
}

export function getChazabyName(name: string) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get<{ message: string; data: Chaza }>(
      `${BASE_URL}/api/v1/chaza/byName/${name}`,
      config
    )
    .then((res) => res.data);
}

export function createChaza(chaza: ChazaCreate) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .post<Chaza>(`${BASE_URL}/api/v1/chaza`, chaza, config)
    .then((res) => res.data);
}

export function updateChaza(chaza: ChazaUpdate) {
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

export function getChazasByLocation(latitude: number, longitude: number, radius: number) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const token = cookie.get("user-token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .get<{ message: string; data: Chaza[] }>(
      `${BASE_URL}/api/v1/chaza/filterByLocation?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
      config
    )
    .then((res) => res.data);
}

  export function filterChazasByLocation(location: Location) {
    const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
    const config = {
      params: {
        latitude: location.coordinates[1],
        longitude: location.coordinates[0],
      },
    };
  return axios
    .get<{ message: string; data: Chaza[] }>(
      `${BASE_URL}/api/v1/chaza/filterByLocation`,
      config
    )
    .then((res) => res.data);
}