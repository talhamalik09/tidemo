import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundFormComponent } from '../trade/fund-form/fund-form';
import { FundTableComponent } from '../trade/fund-table/fund-table';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FundFormComponent,FundTableComponent],
  template: `
    <h1>Welcome</h1>
    
    <!-- Reusing your form -->
    <app-fund-form></app-fund-form>
    <app-fund-table></app-fund-table>
  `,
  
})
export class HomeComponent {}