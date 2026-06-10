import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-special-payment-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './special-payment-conditions.html',
  styleUrls: ['./special-payment-conditions.scss']
})
export class SpecialPaymentConditions{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      specialPaymentBeneficiary: ['', Validators.required],
      specialPaymentBankOnly: ['', Validators.required],
      specialPaymentBankNext: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}