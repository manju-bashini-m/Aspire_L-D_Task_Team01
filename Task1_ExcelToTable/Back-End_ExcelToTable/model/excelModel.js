import mongoose from 'mongoose';

const excelSchema = new mongoose.Schema({
    Sno:Number,
    FirstName:String,
    LastName:String,
    Email:String,
    Role:String,

});
const excelModel= mongoose.model.excelData || mongoose.model("excelData",excelSchema);

export default excelModel;
