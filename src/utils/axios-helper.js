import axios from 'axios';

const baseURL = 'https://todo-list.alphacamp.io/api';

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return console.error(error);
  },
);

export { axiosInstance };
