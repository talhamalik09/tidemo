import { Component } from '@angular/core';
import { FundFormComponent } from '../trade/fund-form/fund-form';
import { FundTableComponent } from '../trade/fund-table/fund-table';

@Component({
  selector: 'app-fund-page',
  standalone: true,
  imports: [FundFormComponent, FundTableComponent],
  templateUrl: './fund-page.html'
})
export class FundPageComponent {}