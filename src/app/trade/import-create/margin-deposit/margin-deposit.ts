import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-margin-deposit',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './margin-deposit.html',
  styleUrl: './margin-deposit.scss'
})
export class MarginDeposit {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      marginDefinedAs: ['', Validators.required],
      percent: ['', [Validators.min(0), Validators.max(100)]],
      amountType: ['', Validators.required],
      collateralType: ['', Validators.required],
      account: ['', Validators.required],
      currency: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Margin Deposit:', this.form.value);
    }
  }

  marginOptions = ['Amount', 'Percentage'];

  amountOptions = [
    'Additional amount outstanding',
    'Additional amount claimed but not paid',
    'Amount not covered by shipping guarantees',
    'Available additional amount after this event',
    'Available amount after this event',
    'Event outstanding liability amount'
  ];
}