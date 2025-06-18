import excelModel from "../model/excelModel.js";
import fs from 'fs';
import xlsx from 'xlsx';

export const postExcelData=async(req,res)=>{
    try {
        const filePath=req.file.path;
        const readFile=xlsx.readFile(filePath);
        const sheetName=readFile.SheetNames[0];
        const jsonData=xlsx.utils.sheet_to_json(readFile.Sheets[sheetName]);

        await excelModel.insertMany(jsonData);
        const data = await excelModel.find();
        console.log(`Excel data ${data}`);
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