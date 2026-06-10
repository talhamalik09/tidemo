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
  selector: 'app-other-parties',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './other-parties.html',
  styleUrls: ['./other-parties.scss']
})
export class OtherParties {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  issuerOptions = [
    'Bank',
    'Non Bank'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      responseToSender: ['', Validators.required],
      instructionsReceived: ['', Validators.required],
      acknowledgementNarrative: ['', Validators.required],

      reimbursingBank: ['', Validators.required],
      reimbursingBankDetails: ['', Validators.required],

      applicantBank: ['', Validators.required],
      applicantBankDetails: ['', Validators.required],

      issuingBank: ['', Validators.required],
      issuingBankDetails: ['', Validators.required],

      reference: ['', Validators.required],

      issuer: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}