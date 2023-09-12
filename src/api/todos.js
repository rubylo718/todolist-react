// import axios from 'axios';
// const baseUrl = 'http://localhost:3001';
import { axiosInstance } from '../utils/axios-helper';

export const getTodos = async () => {
  try {
    const res = await axiosInstance.get(`/todos`);
    return res.data.data;
  } catch (err) {
    console.error('[Get Todos Failed]: ', err);
  }
};

export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axiosInstance.post(`/todos`, { title, isDone });
    return res.data;
  } catch (err) {
    console.error('[Create Todo Failed]: ', err);
  }
};

export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;
  try {
    const res = await axiosInstance.patch(`/todos/${id}`, { title, isDone });
    return res.data;
  } catch (err) {
    console.err('[Patch Todo Failed]: ', err);
  }
};

export const deleteTodo = async (payload) => {
  const { id } = payload;
  try {
    const res = await axiosInstance.delete(`/todos/${id}`);
    return res.data;
  } catch (err) {
    console.err('[Delete Todo Failed]: ', err);
  }
};
