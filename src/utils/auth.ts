import axios from 'axios';

export const handleGoogleLogin = async (googleData: any) => {
  const BASE_URL = process.env.BASE_URL ?? 'http://localhost:8080';
  const { tokenId } = googleData;
  const response = await axios.post(`${BASE_URL}/api/v1/auth/google`, {
    token: tokenId,
  });
  return response.data;
};