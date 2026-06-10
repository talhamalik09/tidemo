import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-contract-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './contract-details.html',
  styleUrl: './contract-details.scss'
})
export class ContractDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      referenceDate: ['', Validators.required],
      totalOrderAmount: ['', Validators.required],
      narrative: ['', Validators.required],
      guaranteeValuePercent: ['', Validators.required],
      reference: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  referenceOptions = [
    'Tender',
    'Order',
    'Contract',
    'Offer',
    'Delivery',
    'Performa Invoice',
    'Project'
  ];
}