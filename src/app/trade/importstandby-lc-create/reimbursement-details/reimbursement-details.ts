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
  selector: 'app-reimbursement-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './reimbursement-details.html',
  styleUrls: ['./reimbursement-details.scss']
})
export class ReimbursementDetails{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  chargesForOptions = [
    'Claiment',
    'Issuer'
  ];

  applicableRulesOptions = [
    'URR Latest Version',
    'Not URR'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      account: ['', Validators.required],
      accountNumberAtReimbursingBank: ['', Validators.required],
      transferMethod: ['', Validators.required],

      reimbursingBank: ['', Validators.required],

      instructionToReimbursingBank: ['', Validators.required],

      chargesFor: ['', Validators.required],
      applicableRules: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}