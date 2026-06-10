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
  selector: 'app-margin-deposit',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './margin-deposit.html',
  styleUrl: './margin-deposit.scss'
})
export class MarginDeposit {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  marginTypeOptions = [
    'Cash Margin',
    'Security Margin',
    'Guarantee Margin'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      marginDefinedAs: ['', Validators.required],
      percentage: ['', Validators.required],

      marginDepositCollateralType: ['', Validators.required],

      account: ['', Validators.required],
      currency: ['', Validators.required],
      description: ['', Validators.required],
      collateralType: ['', Validators.required],

    });

  }
   collateralOptions = [
    'Additional Amounts',
    'Additional Amount Outstanding',
    'Additional Amounts Claimed But Not Yet Paid',
    'Amounts Claimed But Not Yet Paid',
    'Available Additional Amount After This Event',
    'Available Amount After This Event (Min Zero)',
    'Available Amount After This Event (Unadjusted)',
    'Confirmed Amount',
    'Confirmed Amount Remaining',
    'Event Outstanding Liability Amount',
    'Full Available Amt (Incl Addi Ant)',
    'Master Amount',
    'Maximum Amount',
    'Maximum Liability',
    'Minimum Amount',
    'Nominal Master Amount',
    'Outstanding Amount',
    'Residual Liability Amount',
    'Residual Unconfirmed Amount',
    'Total Claimed But Not Yet Paid',
    'Total Financed'
  ];

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}