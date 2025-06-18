const express = require("express");
const mongoose= require("mongoose");

const app=express();
const port=3000;


async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://manjumarimuthu2003:unyghqFnFGWh5tIZ@cluster0.gfbbjoy.mongodb.net/ExcelData?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1);
    }
}

connectDB();


const userSchema = new mongoose.Schema({});
const User = mongoose.model("UsersData", userSchema, "UsersData");

app.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});


app.listen(port,()=>{
    console.log(`Listening on the port: ${port}`)
})


//unyghqFnFGWh5tIZ

// mongodb+srv://manjumarimuthu2003:unyghqFnFGWh5tIZ@cluster0.gfbbjoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0