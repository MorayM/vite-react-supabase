import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { errorInterceptor, successInterceptor } from './interceptors';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_END_POINT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

// TODO: add options for authenticated requests
// api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export default api;
