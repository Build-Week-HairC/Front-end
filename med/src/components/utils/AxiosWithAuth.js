import axios from 'axios';
import Auth from './Auth';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.stringify(`Bearer ${token}`),
    }
  });
};
