
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../models/userModel.js'

// register

const registerUser = async (req, res) => {


  const {userName, email, password} = req.body

  try {
    
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





export {registerUser}