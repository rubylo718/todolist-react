import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (err) {
    console.error('[Get Todos Failed]: ', err);
  }
};

export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axios.post(`${baseUrl}/todos`, { title, isDone });
    return res.data;
  } catch (err) {
    console.error('[Create Todo Failed]: ', err);
  }
};

export const patchTodo = () => {};

export const deleteTodo = () => {};
