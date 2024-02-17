import express from 'express'
import cors from 'cors'
import userRoute from './Routes/userRoutes.js'
import mongoose from 'mongoose'


const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server ready')
})

app.use(cors({
    origin: ["http://localhost:4000"],
   methods: ["GET", "POST","PATCH","PUT" ],
   credentials: true,
 }));

app.use('/', userRoute)

const port=process.env.PORT ||  3000;

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
}) 


mongoose.connect("mongodb://127.0.0.1:27017/react-project").then(result=>{
    console.log('mongo db connected');
  }).catch(err=>{
    console.log(err);
  });
