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
  selector: 'app-charges-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './charges-details.html',
  styleUrls: ['./charges-details.scss']
})
export class ChargesDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  ourChargesOptions = [
    'Beneficiary',
    'Applicant'
  ];

  overseasOptions = [
    'Beneficiary',
    'Applicant'
  ];

  taxPaidByOptions = [
    'Customer',
    'Charge Payer'
  ];

  customerAddressOptions = [
    '<--->'
  ];

  billingLevelOptions = [
    'Customer',
    'Product',
    'Transaction'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      periodicChargeFirstDate: ['', Validators.required],
      dayInMonth: ['', Validators.required],
      preferredCurrency: ['', Validators.required],
      chargeAccount: ['', Validators.required],

      ourCharges: ['', Validators.required],
      overseas: ['', Validators.required],
      taxPaidBy: ['', Validators.required],

      customerAddressDebit: ['', Validators.required],

      defer: [false],
      billingInvoicesAutomated: [false],
      reimburseCharges: [false],

      billingLevel: ['', Validators.required],

      userChargesText: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  view() {
    console.log('View Address');
  }

}