import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-amount-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './amount-details.html',
  styleUrl: './amount-details.scss'
})
export class AmountDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  toleranceOptions = [
    'Exact',
    'About',
    'Other',
    'Not Exceeding',
    'Min/Max'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      amountShort: ['', Validators.required],
      amountLong: ['', Validators.required],

      additionalAmounts: ['', Validators.required],
      additionalAmountInformation: ['', Validators.required],

      tolerance: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}