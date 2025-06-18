import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import excelRouter from './routes/excelRoutes.js';
const app=express();
app.use(cors());
app.use(express.json());
const port=3000;

export const ConnectDb=async()=> {
    try {
        //await mongoose.connect("mongodb+srv://manjumarimuthu2003:unyghqFnFGWh5tIZ@cluster0.gfbbjoy.mongodb.net/ExcelData?retryWrites=true&w=majority&appName=Cluster0");
        await mongoose.connect("mongodb://localhost:27017/exceldata");
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


//unyghqFnFGWh5tIZ

// mongodb+srv://manjumarimuthu2003:unyghqFnFGWh5tIZ@cluster0.gfbbjoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0