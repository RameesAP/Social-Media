import axios from 'axios'

const API = axios.create({ baseURL: 'https://mern-socialmedia-main-server.onrender.com' });

export const getMessages = (id) => API.get(`/message/${id}`)

export const addMessage=(data)=>API.post('/message/',data)