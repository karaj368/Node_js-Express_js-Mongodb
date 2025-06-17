import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connectdb = () =>{
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected Successfully"))
}
