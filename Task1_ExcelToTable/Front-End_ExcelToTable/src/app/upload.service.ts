import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  uploadExcel(file:File){
    const formData=new FormData();
    formData.append('excel',file);
    return this.http.post("http://localhost:3000/excel/addData",formData);
  }
}
