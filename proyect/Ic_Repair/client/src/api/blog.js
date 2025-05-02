import axios from 'axios'

const ADMIN  = 'http://localhost:3000/api/admin'
const API = 'http://localhost:3000/api'

export const postRequest = await axios.get(`${ADMIN}/public`);

export const deleteRequest = id => axios.delete(`${ADMIN}/public/${id}`);

export const getRequest = await axios.get(`${API}/admin`,  { withCredentials: true })

