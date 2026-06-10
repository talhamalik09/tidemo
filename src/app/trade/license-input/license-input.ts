import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-license-input',
  imports: [RouterModule],
  
  styleUrl: './license-input.scss',
  template:`  
  <h3>Finance Standalone</h3>
    <router-outlet></router-outlet>`
})
export class LicenseInput {}
