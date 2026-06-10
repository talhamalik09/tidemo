import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-discount-forearly-payment',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './discount-forearly-payment.html',
  styleUrl: './discount-forearly-payment.scss'
})
export class DiscountForearlyPayment {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      percent: ['', Validators.required],

      cutOffDate: ['', Validators.required],

      orAmount: ['', Validators.required],

      orCutOffPeriod: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}