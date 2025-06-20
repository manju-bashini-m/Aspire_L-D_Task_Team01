import express from 'express';
import { deleteDataByID, getAllData, postExcelData,updateDataByID } from '../controller/excelController.js';
import multer from 'multer';

const storage=multer.diskStorage({destination:"uploads"});

const upload=multer({
    storage:storage
});

const excelRouter=express.Router();

excelRouter.post("/addData",upload.single('excel'),postExcelData);
excelRouter.get("/getdata",getAllData);
excelRouter.delete("/:id",deleteDataByID);
excelRouter.put("/:id",updateDataByID);

export default excelRouter;