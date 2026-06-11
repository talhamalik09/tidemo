import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-special-payment-conditions',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      beneficiary: ['', [Validators.required, Validators.minLength(5)]],
      bankOnly: ['', [Validators.required, Validators.minLength(5)]],
      nextBank: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}