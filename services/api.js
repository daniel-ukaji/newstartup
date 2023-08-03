import axios from 'axios';
import { setAuthToken } from './auth';
import { getAuthToken } from './auth';


const API_BASE_URL = 'https://content-platform-backend.onrender.com/api';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, credentials);
    const { userToken } = response.data;
    setAuthToken(userToken);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchUserData = async () => {
  const token = getAuthToken();
  try {
    const response = await axios.get(`${API_BASE_URL}/user/profile`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
