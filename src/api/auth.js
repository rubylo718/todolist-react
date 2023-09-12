// import axios from 'axios';
import { axiosInstance } from '../config/axios-helper';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axiosInstance.post(`/auth/login`, {
      username,
      password,
    });
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    } else {
      return data;
    }
  } catch (err) {
    console.error('[Login Failed]: ', err);
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const { data } = await axiosInstance.post(`/auth/register`, {
      username,
      email,
      password,
    });
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    } else {
      return data;
    }
  } catch (err) {
    console.error('[Register Failed]: ', err);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const res = await axiosInstance.get(`/auth/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return res.data.success;
  } catch (err) {
    console.error(`[Check Permission Failed: ]`, err);
  }
};
