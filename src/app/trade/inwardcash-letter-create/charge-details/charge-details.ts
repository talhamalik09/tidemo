import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-charge-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './charge-details.html',
  styleUrls: ['./charge-details.scss']
})
export class ChargeDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  billingLevelOptions = [
    'Product',
    'Currency',
    'Transaction'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      defer: [false],

      preferredCurrency: ['', Validators.required],

      billingLevel: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}