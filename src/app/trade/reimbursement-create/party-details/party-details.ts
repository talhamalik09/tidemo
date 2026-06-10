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
export class PartyDetails{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  availableOptions = [
    'Named Claiming Bank',
    'Any Claiming Bank in City',
    'Any Claiming Bank in Country',
    'Named Claiming Bank'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      issuingBank: ['', Validators.required],
      issuingBankDetails: ['', Validators.required],

      availableWithBank: ['', Validators.required],
      availableWithBankDetails: ['', Validators.required],

      availableWith: ['', Validators.required],

      preDebitNotificationDays: ['', Validators.required],

      preDebitNotification: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}