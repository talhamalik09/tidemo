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
  selector: 'app-special-payment-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './special-payment-conditions.html',
  styleUrls: ['./special-payment-conditions.scss']
})
export class SpecialPaymentConditions {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      beneficiaryConditions: ['', Validators.required],
      bankOnlyConditions: ['', Validators.required],
      bankOnlySendToNextBankConditions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}