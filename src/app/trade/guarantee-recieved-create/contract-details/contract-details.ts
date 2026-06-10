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
  selector: 'app-contract-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './contract-details.html',
  styleUrls: ['./contract-details.scss']
})
export class ContractDetails{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  referenceOptions = [
    'TENDER',
    'ORDER',
    'CONTRACT',
    'OFFER',
    'DELIVERY',
    'PERFORMA INVOICE',
    'PROJECT'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      referenceDate: ['', Validators.required],
      totalOrderAmount: ['', Validators.required],
      narrative: ['', Validators.required],
      guaranteeValue: ['', Validators.required],

      reference: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}