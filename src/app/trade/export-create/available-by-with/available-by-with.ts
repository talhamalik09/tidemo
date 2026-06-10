import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  availableByOptions = [
    'Sight Payment',
    'Acceptance',
    'Deferred Payment',
    'Negotiation',
    'Mixed Payment'
  ];

  availableWithOptions = [
    'Any Bank',
    'Any Bank (In City)',
    'Any Bank (In Country)',
    'Advising Bank',
    'Advise Through Bank',
    'Ourselves',
    'Issuing Bank Received From Bank'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      availableBy: ['', Validators.required],
      availableWith: ['', Validators.required],
      draft: [false],
      expectedLatestPaymentDate: ['', Validators.required],
      invoicePercentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}