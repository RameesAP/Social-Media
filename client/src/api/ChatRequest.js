import axios from 'axios';

const API = axios.create({ baseURL: 'https://mern-socialmedia-main-server.onrender.com' })
// const API = axios.create({ baseURL: 'http://localhost:5000' })

export const userChats = (id) => API.get(`/chat/${id}`)