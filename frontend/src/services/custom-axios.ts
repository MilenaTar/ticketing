import axios, { AxiosRequestConfig } from 'axios';

export enum ApiRequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

interface CustomAxiosOptions {
  method?: ApiRequestMethod;
  headers?: Record<string, string>;
  body?: any;
  queryParams?: Record<string, any>;
  signal?: AbortSignal;
  requiresToken?: boolean;
}

const API_BASE_URL = 'http://localhost:3030';

export const customAxios = async (
  endpoint: string,
  options: CustomAxiosOptions = { requiresToken: false },
) => {
  const token = localStorage.getItem('accessToken');

  if (options.requiresToken && !token) {
    return Promise.reject('Token is required');
  }

  const config: AxiosRequestConfig = {
    method: options.method || ApiRequestMethod.GET,
    url: `${API_BASE_URL}${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      ...(options.requiresToken && token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    params: options.queryParams,
    data: options.body,
    signal: options.signal,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    throw error;
  }
};
