 
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // backend URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};
