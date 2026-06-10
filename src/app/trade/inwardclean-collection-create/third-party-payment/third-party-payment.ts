import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-third-party-payment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './third-party-payment.html',
  styleUrls: ['./third-party-payment.scss']
})
export class ThirdPartyPayment {

  form: FormGroup;
  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      thirdPartyPaymentDetails: ['', Validators.required], // resizable input (textarea)
      percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      totalAmountDue: ['', Validators.required]

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