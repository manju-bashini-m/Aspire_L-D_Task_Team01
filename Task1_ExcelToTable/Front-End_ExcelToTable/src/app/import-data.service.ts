import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExcelResponse } from './excel-response';
@Injectable({
  providedIn: 'root'
})
export class ImportDataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<ExcelResponse>("http://localhost:3000/excel/getdata");
  }

}
