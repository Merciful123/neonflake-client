import axios from "axios";

const API_URL = "neonflake-backend-ue4p.onrender.com/api/post";

export const uploadPost = async (formData) => {
  await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const fetchPost = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
