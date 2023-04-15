import express from "express";
import cors from 'cors'
import { registerUser,loginUser } from '../Controllers/AuthController.js'
router.use(cors())
const router = express.Router()


router.post('/register',registerUser)
router.post('/login',loginUser)

export default router