import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-available-by-with',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './available-by-with.html',
  styleUrl: './available-by-with.scss'
})
export class AvailableByWith {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  availableByOptions: string[] = [
    'Acceptance',
    'Deferred Payment',
    'Mixed Payment',
    'Negotiation',
    'Sight Payment'
  ];

  availableWithOptions: string[] = [
    'Any Bank',
    'Any Bank in City',
    'Any Bank in Country',
    'Advising Bank',
    'Advising Through Bank',
    'Ourselves',
    'Issuing Bank',
    'Received From Bank',
    'Named Bank'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      availableBy: ['', Validators.required],

      availableWith: ['', Validators.required],

      expectedLatestPaymentDate: ['', Validators.required],

      invoicePercentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],

      draftSuppressMT704: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}