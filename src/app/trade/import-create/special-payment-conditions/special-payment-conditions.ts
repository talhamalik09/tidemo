import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-special-payment-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './special-payment-conditions.html',
  styleUrl: './special-payment-conditions.scss'
})
export class SpecialPaymentConditions {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      beneficiaryCondition: ['', [Validators.required, Validators.maxLength(300)]],
      bankCondition: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Special Payment Conditions:', this.form.value);
    }
  }
}