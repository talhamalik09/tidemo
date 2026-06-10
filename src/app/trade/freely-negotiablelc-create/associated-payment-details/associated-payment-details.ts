import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-associated-payment-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './associated-payment-details.html',
  styleUrl: './associated-payment-details.scss'
})
export class AssociatedPaymentDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      details: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  split() {
    console.log('Split:', this.form.value);
  }

  finance() {
    console.log('Finance:', this.form.value);
  }

  update() {
    console.log('Update:', this.form.value);
  }

  delete() {
    console.log('Delete:', this.form.value);
  }
}