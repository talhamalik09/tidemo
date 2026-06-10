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

  fromAfterOptions = [
    'After',
    'From (Include Start Date)',
    'From (Exclude Start Date)'
  ];

  tenorStartOptions = [
    'Air Waybill',
    'Arrival of Goods',
    'Bill of Exchange',
    'Bill of Lading',
    'Invoice',
    'Other Shipment Date',
    'Sight'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      identifier: ['', Validators.required],

      acceptanceAmount: ['', [Validators.required, Validators.min(1)]],

      tenorPeriod: ['', Validators.required],

      acceptanceDate: ['', Validators.required],

      effectiveDate: ['', Validators.required],

      maturityDate: ['', Validators.required],

      fromAfter: ['', Validators.required],

      tenorStart: ['', Validators.required],

      noticeDays: [{ value: '', disabled: true }],

      centralBankEligible: [false],
      eligibleForDiscount: [false],
      holdingDraft: [false],
      autoMature: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}