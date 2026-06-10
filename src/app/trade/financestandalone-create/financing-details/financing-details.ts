import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-financing-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './financing-details.html',
  styleUrl: './financing-details.scss'
})
export class FinancingDetails {

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

      financeCurrency: [
        '',
        Validators.required
      ],

      amount: [
        '',
        Validators.required
      ],

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

      calculateCurrency: [
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