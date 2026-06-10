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
  selector: 'app-import-letter-credit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './import-letter-credit.html',
  styleUrls: ['./import-letter-credit.scss']
})
export class ImportLetterCredit {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  confirmationOptions = [
    'Confirmed',
    'May Add',
    'Unconfirmed'
  ];

  productTypeOptions = [
    'Back To Back L/C',
    'Import LC - Sight',
    'Import Letter Of Credit - Sight'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      applicantReference: ['', Validators.required],
      expiryDate: ['', Validators.required],
      expiryPlace: ['', Validators.required],

      transferable: [false],
      revolving: [false],

      confirmation: ['', Validators.required],
      productType: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}