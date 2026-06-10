import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-available-by',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './available-by-with.html',
  styleUrl: './available-by-with.scss'
})
export class AvailableByComponent {

  labels = LABELS;
  lang = 'en';

  isOpen = true;

  form: FormGroup;

  availableByOptions = [
    'Sight Payment',
    'Negotiation',
    'Mixed Payment',
    'Deferred Payment'
  ];

  availableWithOptions = [
    'Any Bank',
    'Any Bank in City',
    'Any Bank in Country',
    'Advising Bank',
    'Advise Through Bank',
    'Ourselves',
    'Issuing Bank'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      availableBy: ['', Validators.required],
      availableWith: ['', Validators.required],

      latestPaymentDate: ['', Validators.required],

      invoicePercentage: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)]
      ]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log("Available By Form:", this.form.value);
  }
}