import express from 'express'
import { registerUser } from '../../controllers/auth/auth-controllers.js'

const authRouter = express.Router()



authRouter.post('/register', registerUser)



export default authRouter;