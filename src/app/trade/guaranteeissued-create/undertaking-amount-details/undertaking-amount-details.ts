import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-amount-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './undertaking-amount-details.html',
  styleUrl: './undertaking-amount-details.scss'
})
export class UndertakingAmountDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      amountInWords: ['', Validators.required],
      additionalAmount: ['', Validators.required],
      additionalSupplementaryAmountInformation: ['', Validators.required],
      plusPercent: ['', Validators.required],
      minusPercent: ['', Validators.required],
      tolerance: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  toleranceOptions = [
    'Exact',
    'About',
    'Other',
    'Not Exceeding',
    'Min/Max'
  ];
}