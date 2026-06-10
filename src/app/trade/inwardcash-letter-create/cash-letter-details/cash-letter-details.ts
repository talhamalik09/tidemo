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
  selector: 'app-cash-letter-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

      reference: ['', Validators.required],

      cashLetterAmount: ['', Validators.required],

      adviseBy: ['', Validators.required],

      cashLetterDate: ['', Validators.required],

      expiryDate: ['', Validators.required],

      dateReceived: ['', Validators.required],

      productType: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {

    if (this.form.valid) {

      console.log(this.form.value);

    }

  }

}