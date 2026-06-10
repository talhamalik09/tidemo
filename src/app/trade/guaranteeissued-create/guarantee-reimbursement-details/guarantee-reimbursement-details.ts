import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-guarantee-reimbursement-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './guarantee-reimbursement-details.html',
  styleUrl: './guarantee-reimbursement-details.scss'
})
export class GuaranteeReimbursementDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reimbursingBank: ['', Validators.required],
      instructionsToReimbursingBank: ['', Validators.required],
      account: ['', Validators.required],
      accountNumberAtReimbursingBank: ['', Validators.required],
      transferredMethod: ['', Validators.required],
      chargesFor: ['', Validators.required],
      applicableRules: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  chargesOptions = [
    'Claimant',
    'Issuer'
  ];

  rulesOptions = [
    'URR LATEST VERSION',
    'NOTURR'
  ];
}