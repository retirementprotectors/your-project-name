import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { store } from '@/store';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:9000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const client: AxiosInstance = axios.create(config);

// Add auth token to requests
client.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      store.dispatch({ type: 'auth/logout' });
    }
    return Promise.reject(error);
  }
);

export default client; 