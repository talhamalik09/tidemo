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
  selector: 'app-payment-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './payment-details.html',
  styleUrl: './payment-details.scss'
})
export class PaymentDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  typeOptions: string[] = [
    'Sight',
    'Acceptance',
    'Deferred'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      draftIdentifier: ['', Validators.required],

      amount: ['', Validators.required],

      type: ['', Validators.required],

      valueDate: ['', Validators.required],

      adviseChargesWithPayment: [false],

      hold: [false],

      eligible: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}