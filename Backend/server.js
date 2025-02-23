import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRouter from './routes/auth/auth-routes.js';



  // mongoose file will be theer 

  mongoose.connect('mongodb+srv://Haman:987321@cluster0.ma7xo.mongodb.net/')
  .then(() => console.log('Mongodb connected'))
  .catch((error) => console.log(error))


const app = express()
const PORT = process.env.PORT || 4000;



// use cors using on dependencies

app.use(
  cors({
    origin:'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders : [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragam"
    ],
    credentials : true
  })
)

app.use(cookieParser())
app.use(express.json())
app.use('/api/auth',authRouter)

app.listen(PORT, () => console.log(`server is now runing on port ${PORT}`))