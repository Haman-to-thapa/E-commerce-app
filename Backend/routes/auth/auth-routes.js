import express from 'express'
import { authLogin, registerUser } from '../../controllers/auth/auth-controllers.js'

const authRouter = express.Router()



authRouter.post('/register', registerUser)
authRouter.post('/login', authLogin)



export default authRouter;