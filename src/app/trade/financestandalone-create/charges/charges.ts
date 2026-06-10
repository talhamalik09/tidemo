import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-charges',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './charges.html',
  styleUrl: './charges.scss'
})
export class Charges{

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  currencyOptions = ['USD', 'EUR', 'GBP', 'PKR'];
  chargeForOptions = ['Buyer', 'Seller'];
  billingOptions = ['Customer', 'Product', 'Transaction'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      preferredCurrency: ['', Validators.required],
      chargesFor: ['', Validators.required],
      billingLevel: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}