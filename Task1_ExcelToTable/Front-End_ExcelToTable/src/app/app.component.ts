import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadService } from './upload.service';
// import { DataTableComponent } from './data-table/data-table.component';
@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private uploadService:UploadService){}
  onFileChange(event:any){
    const file=event.target.files[0];
    if(file){
      this.uploadService.uploadExcel(file).subscribe({
      next: (res) => console.log('Upload successful',res),
      error: (err) => console.log('Upload failed',err)
    }
    )
    }
    
  }
}
