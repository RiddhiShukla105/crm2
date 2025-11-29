import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

//import custom files
import connectDB from "./Config/db.js";
import user from './Routes/userRoute.js'


dotenv.config();
const app=express()
const PORT=process.env.PORT||8000

//built-in middleware
 app.use(cors())
 app.use(express.json())

 connectDB()

//checking backend working
 app.get('/',(req,res)=>{
    res.send("From Backend")
 })

//routes
app.use('/api/user',user)

 app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))