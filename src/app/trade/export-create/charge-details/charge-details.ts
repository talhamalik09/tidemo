import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-charge-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './charge-details.html',
  styleUrl: './charge-details.scss'
})
export class ChargeDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      ours: ['', Validators.required],
      overseas: ['', Validators.required],
      taxPaidBy: ['', Validators.required],
      chargeAccount: ['', Validators.required],
      customerAddressDebit: ['', Validators.required],
      userChargeText: ['', Validators.required],
      deferApplicantCharges: [false],
      preferredCurrency: ['', Validators.required],
      billLevel: ['', Validators.required],
      billingInvoiceAutomatically: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  oursOptions = ['Beneficiary', 'Applicant'];
  overseasOptions = ['Beneficiary', 'Applicant'];
  taxOptions = ['Charge Payer', 'Customer'];
  billOptions = ['Customer', 'Product', 'Transaction'];
}