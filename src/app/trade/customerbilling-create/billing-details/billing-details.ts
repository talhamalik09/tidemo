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
  selector: 'app-billing-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './billing-details.html',
  styleUrl: './billing-details.scss'
})
export class BillingDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      customer: [
        '',
        Validators.required
      ],

      frequency: [
        '',
        Validators.required
      ],

      billingLevel: [
        '',
        Validators.required
      ],

      advise: [false],

      invoice: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}