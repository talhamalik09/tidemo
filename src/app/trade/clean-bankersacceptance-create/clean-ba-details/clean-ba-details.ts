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
  selector: 'app-clean-ba-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './clean-ba-details.html',
  styleUrl: './clean-ba-details.scss'
})
export class CleanBADetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  productTypeOptions: string[] = [
    'Clean Bankers Acceptance - Hold',
    'Clean Bankers Acceptance - Sold',
    'Reimbursement Acceptance'
  ];

  advisedByOptions: string[] = [
    'Internal',
    'Mail',
    'Telex',
    'Swift',
    'Email',
    'Telex via Swift',
    'Gateway',
    'Fax'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      // ✅ MUST MATCH HTML EXACTLY
      reference: ['', Validators.required],

      acceptanceAmount: ['', [Validators.required, Validators.min(1)]],

      productType: ['', Validators.required],

      advisedBy: ['', Validators.required],

      dateReceived: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  submit() {
    if (this.form.valid) {
      console.log('Clean BA Form:', this.form.value);
    } else {
      console.log('Form invalid');
    }
  }
}