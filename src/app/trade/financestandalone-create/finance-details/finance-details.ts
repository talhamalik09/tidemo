import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-finance-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './finance-details.html',
  styleUrl: './finance-details.scss'
})
export class FinanceDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reference: ['', Validators.required],
      financingAmount: ['', Validators.required],
      dateReceived: ['', Validators.required],

      withRecourse: [false],
      autoRepay: [false],
      trustReceiptLoan: [false],

      productType: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  productOptions = [
    'Discounted Financing',
    'Export Financing',
    'Import Financing'
  ];
}