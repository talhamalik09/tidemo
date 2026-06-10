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
      percent: ['', Validators.required],
      marginDepositCollateralType: ['', Validators.required],
      account: ['', Validators.required],
      inCurrency: ['', Validators.required],
      description: ['', Validators.required],
      coverNotes: ['', Validators.required],
      marginDefinedAs: ['', Validators.required],
      ofAmount: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  refresh() {
    this.form.reset();
  }

  marginOptions = ['Percentage', 'Amount'];

  amountOptions = [
    'Air Waybill - Shipment Amount',
    'Bill of Lading - Shipment Amount',
    'First DOT - Shipment Amount',
    'Master Amount',
    'Maximum Liability',
    'Nominal Master Amount',
    'Outstanding Amount',
    'Residual Liability Amount',
    'Shipping Guarantee Amount',
    'Total Finance (All Financed Deals)',
    'Total Financed At Master Class',
    'Total Outset'
  ];
}