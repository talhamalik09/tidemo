import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgFor,NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-cash-letter-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor,NgIf],
  templateUrl: './cash-letter-details.html',
  styleUrls: ['./cash-letter-details.scss']
})
export class CashLetterDetails {

  form: FormGroup;

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      reference: [''],
      cashLetterAmount: [''],
      adviseBy: [''],
      productType: [''],
      cashLetterDate: [''],
      expiryDate: [''],
      dateReceived: [''],
      domesticExpiry: [false]
    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}