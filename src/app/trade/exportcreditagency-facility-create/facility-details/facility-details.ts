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
  selector: 'app-facility-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './facility-details.html',
  styleUrl: './facility-details.scss'
})
export class FacilityDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  amountPercentOptions = [
    'Amount',
    'Percent'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      totalFacilityAmount: [
        '',
        Validators.required
      ],

      underlyingFacilityReference: [
        '',
        Validators.required
      ],

      totalDrawdownAmount: [
        '',
        Validators.required
      ],

      facilityCurrency: [
        '',
        Validators.required
      ],

      agreementDate: [
        '',
        Validators.required
      ],

      effectiveDate: [
        '',
        Validators.required
      ],

      expiryDate: [
        '',
        Validators.required
      ],

      restrictToNamedCustomer: [false],

      amountAvailableIsRevolving: [false],

      manualRollover: [false],

      amountPercent: [
        '',
        Validators.required
      ],

      percent: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
      ],

      productType: [
        '',
        Validators.required
      ],

      facilityDetails: [
        '',
        Validators.required
      ]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  calculate() {
    console.log('Calculate clicked');
  }

}