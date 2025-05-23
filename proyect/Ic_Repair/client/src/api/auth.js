import axios from 'axios';

const API = "http://localhost:3000/api"

export const registerRequest = user => axios.post(`${API}/register`, user)
export const loginRequest = user => axios.post(`${API}/login`, user)
export const registerBlogRequest = (formData) =>
    axios.post(`${API}/admin/blog?tipoArchivo=blog`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  