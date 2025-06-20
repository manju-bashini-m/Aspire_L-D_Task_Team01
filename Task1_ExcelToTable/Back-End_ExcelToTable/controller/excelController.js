import excelModel from "../model/excelModel.js";
import fs from 'fs';
import xlsx from 'xlsx';

export const postExcelData=async(req,res)=>{
    try {
        const filePath=req.file.path;
        const readFile=xlsx.readFile(filePath);
        const sheetName=readFile.SheetNames[0];
        const jsonData=xlsx.utils.sheet_to_json(readFile.Sheets[sheetName]);

        await excelModel.insertMany(jsonData).then(()=>console.log('Inserted')).catch(
            err => {console.log(err)}
        );
        // const data = await excelModel.find();
        res.json({ success: true, message: 'Data saved to DB' });
    } catch (err) {
         res.status(500).json({ success: false, error: err.message });
    }
}

export const getAllData=async(req,res)=>{
    try {
        const data=await excelModel.find();
        res.json({success: true, data:data});
    } catch (err) {
         res.status(500).json({ success: false, error: err.message });
    }
}

export const deleteDataByID= async(req,res) => {
    try{
        let id = req.params["id"];
        let result = await excelModel.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({ success: false, message: "Item not found" });
        }
        res.status(200).json({ success: true, message: "Item deleted successfully" });
    }
    catch(err){
        res.status(500).json({ success: false, error: err.message });
    }
}

export const updateDataByID = async(req, res) => {
    try{
        let model=req.body;
        console.log(model);
        let id = req.params["id"];
       let result = await excelModel.findOneAndUpdate({ _id: id }, model,{ new: true, runValidators: true });
        if(!result){
            return res.status(404).json({ success: false, message: "Item not found" });
        }
        res.status(200).json({ success: true, message: "Item updated successfully" });
    }
    catch(err){
        res.status(500).json({success:false, error:err.message});
    }
}