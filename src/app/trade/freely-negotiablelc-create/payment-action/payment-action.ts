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
  selector: 'app-payment-action',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './payment-action.html',
  styleUrl: './payment-action.scss'
})
export class PaymentAction {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  paymentOptions: string[] = [
    'Claim Reimbursement',
    'General Request to Issuer',
    'General Request to Presenter',
    'Pay',
    'Pay and Claim Reimbursement',
    'Pay at Maturity',
    'Pay with Discrepancies',
    'Pay with Documents',
    'Refuse Documents',
    'Reject',
    'Reject and Claim Refund',
    'Request Acceptance',
    'Request Authorisation to Pay',
    'Request Payment',
    'Reverse Payment',
    'Send Documents on Approval'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      paymentOption: ['', Validators.required],

      mixedPayment: [false],
      withRecourse: [false],
      finalPayment: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}