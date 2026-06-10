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
  selector: 'app-license-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor,NgIf],
  templateUrl: './license-details.html',
  styleUrl: './license-details.scss'
})
export class LicenseDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  productTypeOptions = [
    'Export License',
    'FX License',
    'Import License'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      licenseNumber: ['', Validators.required],

      authorityReference: ['', Validators.required],

      issueDate: ['', Validators.required],

      registrationDate: ['', Validators.required],

      productType: ['', Validators.required],

      multiCurrency: [false],

      realEstate: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}