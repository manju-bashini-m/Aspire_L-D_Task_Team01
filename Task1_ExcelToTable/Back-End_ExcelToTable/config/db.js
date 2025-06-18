import mongoose from "mongoose";

export const ConnectDb=async()=> {
    try {
        await mongoose.connect("mongodb+srv://manjumarimuthu2003:unyghqFnFGWh5tIZ@cluster0.gfbbjoy.mongodb.net/ExcelData?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1);
    }
}