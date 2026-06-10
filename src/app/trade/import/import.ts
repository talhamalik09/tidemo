import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-import',
  imports: [RouterModule],
 
  styleUrl: './import.scss',
    template: `
    <h3>Import</h3>
    <router-outlet></router-outlet>
  `
})
export class Import {}
