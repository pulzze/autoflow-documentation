import axios from 'axios';

const API_BASE_URL = process.env.DOCUSAURUS_API_BASE_URL;


const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});

// GET
export const get = async (path, params) => {
  try {
    const response = await apiInstance.get(path, { params });
    return response.data;
  } catch (error) {
    console.error('GET Request Error:', error);
    throw error;
  }
};

// POST
export const post = async (path, data) => {
  try {
    const response = await apiInstance.post(path, data);
    return response.data;
  } catch (error) {
    console.error('POST Request Error:', error);
    throw error;
  }
};