import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
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
      chargeAccount: ['', [Validators.required, Validators.maxLength(34)]],
      customerAddress: ['', Validators.required],
      userChargesText: ['', [Validators.required, Validators.maxLength(200)]],
      deferApplicantCharges: ['', [Validators.required, Validators.maxLength(200)]],
      deferBeneficiaryCharges: [false],
      preferredCurrency: ['', Validators.required],
      billLevel: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Charge Details:', this.form.value);
    }
  }

  // DROPDOWNS
  partyOptions = ['Applicant', 'Beneficiary'];

  taxOptions = ['Charge Payer', 'Customer'];

  billOptions = ['Customer', 'Product', 'Transactions'];
}