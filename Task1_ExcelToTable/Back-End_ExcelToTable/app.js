import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import { ConnectDb } from './config/db.js';
import excelRouter from './routes/excelRoutes.js';

// ConnectDb()
const app=express();
app.use(cors());
app.use(express.json());

const port=3000;

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


//unyghqFnFGWh5tIZ

// mongodb+srv://manjumarimuthu2003:unyghqFnFGWh5tIZ@cluster0.gfbbjoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0