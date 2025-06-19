import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import excelRouter from './routes/excelRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
const port=3000;
const dbUrl=process.env.DB_URL;

export const ConnectDb=async()=> {
    try {
        await mongoose.connect(dbUrl);
        //await mongoose.connect("mongodb://localhost:27017/exceldata");
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1);
    }
}
ConnectDb();

app.get("/", async (req, res) => {
    try {
        res.send("Server Running");
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

app.use("/excel",excelRouter);


app.listen(port,()=>{
    console.log(`Listening on the port: ${port}`)
});