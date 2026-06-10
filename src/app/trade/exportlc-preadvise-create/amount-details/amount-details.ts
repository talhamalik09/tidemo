import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-amount-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './amount-details.html',
  styleUrl: './amount-details.scss'
})
export class AmountDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  toleranceOptions: string[] = [
    'Exact',
    'About',
    'Other',
    'Not Exceeding',
    'Min/Max'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      additionalAmounts: [
        '',
        Validators.required
      ],

      additionalAmountInformation: [
        '',
        Validators.required
      ],

      plusPercent: [
        '',
        Validators.required
      ],

      minusPercent: [
        '',
        Validators.required
      ],

      amount: [
        '',
        Validators.required
      ],

      amountDetails: [
        '',
        Validators.required
      ],

      tolerance: [
        '',
        Validators.required
      ]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}