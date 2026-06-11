import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-margin-deposit',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
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
      collateralType: ['', Validators.required],
      account: ['', Validators.required],
      currency: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  marginTypeOptions = ['Amount', 'Percentage'];

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
}