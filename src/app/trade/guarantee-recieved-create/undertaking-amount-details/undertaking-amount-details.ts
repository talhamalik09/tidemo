import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-amount-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './undertaking-amount-details.html',
  styleUrls: ['./undertaking-amount-details.scss']
})
export class UndertakingAmountDetails {

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

      additionalAmount: ['', Validators.required],
      percentPlus: ['', Validators.required],
      percentMinus: ['', Validators.required],

      tolerance: ['', Validators.required],

      additionalSupplementaryInfo: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}