import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  userName : {type: String, required:true, unique:true},
  email : {type:String, required:true, unique:true},
  password : {type:String, required:true},
  role: {type:String, default:'user'}

})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;