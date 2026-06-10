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
  selector: 'app-authority-amount',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './authority-amount.html',
  styleUrls: ['./authority-amount.scss']
})
export class AuthorityAmount {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  toleranceOptions = [
    'Exact',
    'About',
    'Other',
    'Not Exceeding',
    'Min/Max'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      amount: ['', Validators.required],
      amountDetails: ['', Validators.required],

      additionalSupplementaryAmountInformation: ['', Validators.required],
      additionalAmounts: ['', Validators.required],

      tolerance: ['', Validators.required],

      plusPercent: ['', Validators.required],
      minusPercent: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}