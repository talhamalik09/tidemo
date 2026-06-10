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
  selector: 'app-charge-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './charge-details.html',
  styleUrl: './charge-details.scss'
})
export class ChargeDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  chargeOptions: string[] = ['Beneficiary', 'Applicant'];

  taxPayedByOptions: string[] = ['Charge Payer', 'Customer'];

  billLevelOptions: string[] = ['Customer', 'Product', 'Transactions'];

  customerAddressOptions: string[] = ['<-->'];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      chargesOurs: ['', Validators.required],
      chargesOverseas: ['', Validators.required],

      taxPayedBy: ['', Validators.required],

      customerAddressDebit: ['', Validators.required],

      chargeAccount: ['', Validators.required],
      preferredCurrency: ['', Validators.required],

      billLevel: ['', Validators.required],

      deferApplicantCharges: [false],
      deferBeneficiaryCharges: [false],
      billingInvoicesAutomated: [false],

      userChargesText: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}