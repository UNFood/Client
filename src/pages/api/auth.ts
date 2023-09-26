import axios from "axios";
import { loginData, signupData } from "@/types/user";

export function login(userData: loginData) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  return axios
    .post(`${BASE_URL}/api/v1/auth/login`, userData)
    .then((res) => res.data);
}

export function signup(userData: signupData) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  return axios
    .post(`${BASE_URL}/api/v1/auth/signup`, userData)
    .then((res) => res.data);
}

// New function to handle Google login
export async function handleGoogleLogin(response: any) {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:8080";
  const tokenId = response.tokenId;
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/google`, {
      token: tokenId,
    });
    return res.data;
  } catch (error) {
    console.error("Google login failed:", error);
    throw new Error("Google login failed");
  }
}
