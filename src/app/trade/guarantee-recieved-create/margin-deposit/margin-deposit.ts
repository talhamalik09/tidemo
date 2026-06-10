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
  selector: 'app-margin-deposit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './margin-deposit.html',
  styleUrls: ['./margin-deposit.scss']
})
export class MarginDeposit{

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      percent: ['', Validators.required],
      marginDepositCollateralType: ['', Validators.required],
      account: ['', Validators.required],
      inCurrency: ['', Validators.required],
      description: ['', Validators.required],

      marginDefinedAs: ['', Validators.required],
      ofAmount: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  refresh() {
    console.log('Refresh clicked');
  }

  marginDefinedAsOptions = [
    'Amount',
    'Percentage'
  ];

  ofAmountOptions = [
    'Additional Amounts',
    'Additional Amounts Outstanding',
    'Additional Amounts Claimed But Not Yet Paid',
    'Amount Not Covered By Shipping Guarantees',
    'Amount Claimed But Not Yet Paid',
    'Available Additional Amount After This Event',
    'Available Amount After This Event (Min Zero)',
    'Available Amount After This Event (Adjusted)',
    'Event Outstanding Liability Amount',
    'Full Available Amt (Incl. Addl. Amt)',
    'Master Amount',
    'Maximum Amount',
    'Maximum Liability',
    'Minimal Amount',
    'Nominal Master Amount',
    'Original Amount Excl. Amend/Adjust Amount'
  ];

}