import express from 'express'
import { authLogin, registerUser, logoutUser , authMiddleware} from '../../controllers/auth/auth-controllers.js'


const authRouter = express.Router()



authRouter.post('/register', registerUser)
authRouter.post('/login', authLogin)
authRouter.post('/logout',logoutUser)

authRouter.get('/check-auth', authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({ 
       success:true,
       message:"Authenticated User!",
       user,
      })
})



export default authRouter;