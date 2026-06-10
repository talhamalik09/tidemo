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
  selector: 'app-special-payment-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './special-payment-conditions.html',
  styleUrl: './special-payment-conditions.scss'
})
export class SpecialPaymentConditions {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      specialPaymentConditionsBeneficiary: ['', Validators.required],

      specialPaymentConditionsBankOnly: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}