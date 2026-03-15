import axios from 'axios';
import { getStoredToken } from '../utils/storage';

function sanitizeParams(params) {
  if (!params) {
    return params;
  }

  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== '' && value !== null && value !== undefined)
  );
}

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

http.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.params) {
    config.params = sanitizeParams(config.params);
  }

  return config;
});

export default http;
