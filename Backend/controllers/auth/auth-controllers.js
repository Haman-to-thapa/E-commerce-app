
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../models/userModel.js'


// register

const registerUser = async (req, res) => {


  const {userName, email, password} = req.body

  try {
    const checkUserEmail = await User.findOne({email});
    if (checkUserEmail) {
      return res.json({
        success:false, message : 'Already exist'
      })
    }
    
   const hashPassword = await bcrypt.hash(password, 12);

   const newUser = new User({
    userName,
    email,
    password : hashPassword,
   })
   await newUser.save()

   res.json({success:true, message:"Registration successful" })


  } catch (error) {
    
    console.log(error)
    res.json({success:false, message:error.message})
  }
}

// login 

const authLogin = async (req, res) => {

  const {email, password} = req.body

  try {

    const checkUserEmail = await User.findOne({email})
    if (!checkUserEmail) {
      return res.json({success:false, message:"user doesn't exists please register first"})
    }
    
    const checkPasswordMatch = await bcrypt.compare(password, checkUserEmail.password) 
    if (!checkPasswordMatch) {
      return res.json({success:false, message: "incorrect password! please try again"})
    }

    const token = jwt.sign({
      id : checkUserEmail._id ,
      role : checkUserEmail.role,
      email: checkUserEmail.email,
    }, 'CLIENT_SECRET_KEY', {expiresIn : '60min'})

   res.cookie('token', token, {httpOnly: true, secure : false}).json({success:true, message:"Logged in successfully",
    user : {
      email : checkUserEmail.email,
      role : checkUserEmail.role,
      id : checkUserEmail._id
    }
   })

  } catch (error) {
   console.log(error)
   res.json({success:false,message:error.message}) 
  }
}


// logout

const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.json({success:true, message:"logged out successfully"})
}


// auth  Middleware : 
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if(!token) {
    return res.status(401).json({success:false, message:"Unathorized user token"})
  }
  try {
    
    const decoded = jwt.verify(token,"CLIENT_SECRET_KEY");
    req.user = decoded;

    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({success:false, message:error.message})
  }
}




export {registerUser, authLogin, logoutUser, authMiddleware}