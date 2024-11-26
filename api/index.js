import express from 'express'
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'

dotenv.config();
import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongo');  
})
.catch((err)=>{
    console.log(err);
    
})
const app = express();
app.use(express.json());


app.listen(3000,()=>{
    console.log('Server is running on port 3000!!!!');
    
})
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})