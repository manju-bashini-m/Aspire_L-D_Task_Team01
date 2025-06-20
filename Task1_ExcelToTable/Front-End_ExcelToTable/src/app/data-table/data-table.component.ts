import { Component, OnInit, Signal } from '@angular/core';
import { ImportDataService } from '../import-data.service';
import { CommonModule } from '@angular/common';
import { ExcelRow } from '../excel-row';
import {FormsModule} from '@angular/forms'
import { UploadService } from '../upload.service';
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
  count:number=0;
  constructor(private importService:ImportDataService,
    private uploadService:UploadService
   ){
  }
  ngOnInit(): void {
      this.GetAllData()
  }

  onFileChange(event:any){
    const file=event.target.files[0];
    if(file){
      this.uploadService.uploadExcel(file).subscribe({
      next: (res) => {console.log('Upload successful',res);
        this.GetAllData();
      },
      error: (err) => console.log('Upload failed',err)
    }
    )
    }
  }

  GetAllData(){
      this.importService.getData().subscribe((res)=>{
        this.data=res.data;
        this.count=this.data.length;
        if (this.data.length > 0) {
        this.columnKeys = Object.keys(this.data[0]).filter((key)=>{
          return key !== '_id' && key !== '__v'
        });
      }
      }
    )
    }
  
}
