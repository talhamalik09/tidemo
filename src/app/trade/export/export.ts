import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-export',
  imports: [RouterModule],
  
  styleUrl: './export.scss',
     template: `
    <h3>Export</h3>
    <router-outlet></router-outlet>
  `
})
export class Export {}
