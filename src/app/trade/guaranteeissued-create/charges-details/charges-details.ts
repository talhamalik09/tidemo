import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-charges-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './charges-details.html',
  styleUrl: './charges-details.scss'
})
export class ChargesDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  partyOptions = [
    'Principal',
    'Beneficiary'
  ];

  taxOptions = [
    'Charge Payer',
    'Customer'
  ];

  billOptions = [
    'Customer',
    'Product',
    'Transaction'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      periodicChargeFirstDate: ['', Validators.required],
      chargeAccount: [''],
      customerAddress: [''],
      userChargesText: [''],
      dayInMonth: [''],
      preferredCurrency: [''],

      ourCharges: [''],
      overseasCharges: [''],

      taxPaidBy: [''],

      billLevel: [''],

      billingInvoicesAutomated: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  view() {
    console.log(this.form.value);
  }
}