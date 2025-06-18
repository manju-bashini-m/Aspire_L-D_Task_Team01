import { Component, OnInit, Signal } from '@angular/core';
import { ImportDataService } from '../import-data.service';
import { CommonModule } from '@angular/common';
import { ExcelRow } from '../excel-row';
import {FormsModule} from '@angular/forms'
@Component({
  standalone:true,
  selector: 'app-data-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit  {
  data:ExcelRow[]=[];
  columnKeys: string[] = [];
  constructor(private importService:ImportDataService ){
  }
  ngOnInit(): void {
      this.GetAllData()
  }
  GetAllData(){
      this.importService.getData().subscribe((res)=>{
        this.data=res.data;
        if (this.data.length > 0) {
        this.columnKeys = Object.keys(this.data[0]).filter((key)=>{
          return key !== '_id' && key !== '__v'
        });
      }
      }
    )
    }
  
}
