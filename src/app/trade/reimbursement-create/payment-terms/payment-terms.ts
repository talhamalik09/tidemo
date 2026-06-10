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
  selector: 'app-payment-terms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './payment-terms.html',
  styleUrls: ['./payment-terms.scss']
})
export class PaymentTerms {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  availableByOptions = [
    'Acceptance',
    'Deferred Payment',
    'Mixed Payment',
    'Negotiation',
    'Sight Payment'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      availableBy: ['', Validators.required],
      draftRequired: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}