import { Component } from '@angular/core';
import { ImportDataService } from '../import-data.service';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  data :any=[];
  columnKeys: string[] = [];
  constructor(private importService:ImportDataService ){
    this.importService.getData().subscribe({
      next: (res)=> { 
        this.data=res;
        if (this.data.length > 0) {
        this.columnKeys = Object.keys(this.data[0]); // Maintain order
      }
      },
      error: (err) => {console.log(`Error in getting data ${err}`)}
    }
    )
  }
  
}
