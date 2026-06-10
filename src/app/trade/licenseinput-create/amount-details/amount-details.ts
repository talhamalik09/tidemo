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

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      licenseAmountCode: ['', Validators.required],

      licenseAmountDescription: ['', Validators.required],

      additionalAmounts: ['', Validators.required],

      plusPercent: ['', Validators.required],

      minusPercent: ['', Validators.required],

      additionalAmountDetails: ['', Validators.required],

      tolerance: [{ value: '', disabled: true }]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}