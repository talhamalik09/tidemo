import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-charges',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './charges.html',
  styleUrl: './charges.scss'
})
export class Charges {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  ourChargesOptions = [
    'Obligor',
    'Beneficiary'
  ];

  taxPayableByOptions = [
    'Customer',
    'Charge Payer'
  ];

  billingLevelOptions = [
    'Customer',
    'Product',
    'Transaction'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      ourCharges: ['', Validators.required],
      taxPayableBy: ['', Validators.required],
      billingLevel: ['', Validators.required],
      preferredCurrency: ['', Validators.required],
      defer: [false]
    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}