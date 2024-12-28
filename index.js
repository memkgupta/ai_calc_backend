import 'dotenv/config'
import express from "express"
import cors from "cors"
import connectToDatabase from './config/db.js';
import userRouter from "./router/user.router.js"
import calculateRouter from "./router/calculte.router.js"
const app = express();
app.use(cors({
    origin:"*",
    credentials:true
}))
connectToDatabase();
app.use(express.json())
app.use("/api/v1/user",userRouter)
app.use("/api/v1/ai",calculateRouter)
app.listen(8000,()=>{
    console.log("Server started at 8000")
})