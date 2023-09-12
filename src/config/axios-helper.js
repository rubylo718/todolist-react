import axios from 'axios';

const baseURL = 'https://todo-list.alphacamp.io/api';

export const axiosInstance = axios.create({ baseURL });



