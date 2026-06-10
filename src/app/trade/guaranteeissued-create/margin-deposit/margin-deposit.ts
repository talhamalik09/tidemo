import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-margin-deposit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './margin-deposit.html',
  styleUrl: './margin-deposit.scss'
})
export class MarginDeposit {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      marginDefinedAs: ['', Validators.required],
      percentage: ['', Validators.required],
      amount: ['', Validators.required],
      marginDepositCollateralType: ['', Validators.required],
      account: ['', Validators.required],
      inCurrency: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  definedAsOptions = [
    'Amount',
    'Percentage'
  ];

  amountOptions = [
    'Additional Amount',
    'Additional Amount Outstanding',
    'Additional Amount Claimed But Not Yet Paid'
  ];

  collateralTypeOptions = [
    'Additional Amounts',
    'Additional Amount Outstanding',
    'Additional Amount Claimed But Not Yet Paid',
    'Amounts Claimed But Not Yet Paid',
    'Available Additional Amount After This Event',
    'Available Amount After This Event (Min Zero)',
    'Available Amount After This Event (Unadjusted)',
    'Confirmed Amount',
    'Confirmed Amount Remaining',
    'Event Outstanding Liability Amount',
    'Full Available Amt (Incl Addi Amt)',
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
}