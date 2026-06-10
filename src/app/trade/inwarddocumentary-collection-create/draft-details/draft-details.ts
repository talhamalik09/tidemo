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
  selector: 'app-draft-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './draft-details.html',
  styleUrl: './draft-details.scss'
})
export class DraftDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  draftAgainstOptions = [
    'Payment'
  ];

  startInterestOptions = [
    'Before',
    'After'
  ];

  dayBasisOptions = [
    '0-365 Days',
    '1-360 Days',
    '365-6 Days',
    '360/30 Days',
    '365/30 Day Month',
    '365-6/30 Day Month'
  ];

  startFromOptions = [
    'Bill of Exchange Date',
    'Sight',
    'Bill of Lading Date',
    'Air Way Bill Date',
    'Invoice Date',
    'Arrival of Goods Date',
    'Acceptance Date',
    'Maturity Date'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      collectionAmount: ['', Validators.required],
      collectionAmountDetails: [''],

      draftAgainst: ['', Validators.required],

      identifier: ['', Validators.required],

      rate: ['', Validators.required],

      startDate: ['', Validators.required],

      endPeriod: ['', Validators.required],

      percent: ['', Validators.required],

      cutOffDate: ['', Validators.required],

      draftText: ['', Validators.required],

      draftAmount: ['', Validators.required],

      orEndDate: ['', Validators.required],

      graceDays: ['', Validators.required],

      orAmount: ['', Validators.required],

      orCutOffPeriod: ['', Validators.required],

      startInterest: ['', Validators.required],

      dayBasis: ['', Validators.required],

      startFrom: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}