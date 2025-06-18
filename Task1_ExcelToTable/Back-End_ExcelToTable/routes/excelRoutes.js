import express from 'express';
import { getAllData, postExcelData } from '../controller/excelController.js';
import multer from 'multer';

const storage=multer.diskStorage({destination:"uploads"});

const upload=multer({
    storage:storage
});

const excelRouter=express.Router();

excelRouter.post("/addData",upload.single('excel'),postExcelData);
excelRouter.get("/getdata",getAllData);

export default excelRouter;