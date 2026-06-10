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
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './party-details.html',
  styleUrls: ['./party-details.scss']
})
export class PartyDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  availableByOptions = [
    'Acceptance',
    'Deferred Payment',
    'Mixed Payment',
    'Negotiation',
    'Sight Payment'
  ];

  toleranceOptions = [
    'Exact',
    'About',
    'Other',
    'Not Exceeding',
    'Min/Max'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      applicant: ['', Validators.required],
      beneficiary: ['', Validators.required],
      advisingBank: ['', Validators.required],
      account: ['', Validators.required],

      country: ['', Validators.required],
      percent: ['', Validators.required],

      availableBy: ['', Validators.required],
      tolerance: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  refresh() {
    this.form.reset();
  }

}