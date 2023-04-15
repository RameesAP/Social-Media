import axios from "axios"

const main= process.env.MainURL
const API = axios.create({ baseURL: main })

export const logIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)