import { Component } from '@angular/core';
import { BillingDetails } from './billing-details/billing-details';
import { OtherDetails } from './other-details/other-details';

@Component({
  selector: 'app-customerbilling-create',
  imports: [BillingDetails,OtherDetails],
  templateUrl: './customerbilling-create.html',
  styleUrl: './customerbilling-create.scss',
})
export class CustomerbillingCreate {}
