import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
// import { DataTableComponent } from './data-table/data-table.component';
// import { DataTableComponent } from './data-table/data-table.component';
@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router){}
  
}
