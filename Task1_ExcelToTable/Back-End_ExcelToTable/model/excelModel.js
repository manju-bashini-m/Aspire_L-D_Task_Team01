import mongoose from 'mongoose';

const excelSchema = new mongoose.Schema({
   AceID: String,
  Name: String,
  Email: String,
  CollegeName: String,
  Practice: String,
  DateOfJoining: String,
});
const excelModel= mongoose.models.excelData || mongoose.model("excelData",excelSchema);

export default excelModel;
