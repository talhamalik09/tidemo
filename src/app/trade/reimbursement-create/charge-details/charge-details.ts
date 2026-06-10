import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-charge-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './charge-details.html',
  styleUrls: ['./charge-details.scss']
})
export class ChargeDetails {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  ourChargesOptions = [
    'Issuing Bank',
    'Claiming Bank'
  ];

  taxPayableByOptions = [
    'Charge Payer',
    'Customer'
  ];

  billLevelOptions = [
    'Customer',
    'Product',
    'Transactions'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      ourCharges: ['', Validators.required],
      taxPayableBy: ['', Validators.required],
      billLevel: ['', Validators.required],
      preferredCurrency: ['', Validators.required],
      defer: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}