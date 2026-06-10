import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-billing',
  imports: [RouterModule],
  
  styleUrl: './customer-billing.scss',
  template: `<h3> Customer billing<h3>
  <router-outlet></router-outlet>`,
})
export class CustomerBilling {}
