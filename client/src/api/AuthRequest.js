import axios from "axios"

const API = axios.create({ baseURL: "https://frabjous-gnome-9a864e.netlify.app" })

export const logIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)