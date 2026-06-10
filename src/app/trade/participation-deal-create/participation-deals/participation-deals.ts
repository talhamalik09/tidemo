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
  selector: 'app-participation-deals',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './participation-deals.html',
  styleUrl: './participation-deals.scss'
})
export class ParticipationDeals {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  productTypeOptions: string[] = [
    '<--->'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      manualParticipation: [false],
      restrictToNamedCustomer: [false],
      amountAvailableIsRevolving: [false],
      amendmentsUpdateExistingAndNewTransactions: [false],

      agreementDate: ['', Validators.required],
      effectiveDate: ['', Validators.required],
      expiryDate: ['', Validators.required],

      productType: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}