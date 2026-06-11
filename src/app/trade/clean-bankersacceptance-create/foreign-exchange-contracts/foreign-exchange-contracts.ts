import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-foreign-exchange-contracts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './foreign-exchange-contracts.html',
  styleUrl: './foreign-exchange-contracts.scss'
})
export class ForeignExchangeContracts {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reference: ['', Validators.required],
      branch: ['', Validators.required],
      type: ['', Validators.required],
      purchaseCurrency: ['', Validators.required],
      saleCurrency: ['', Validators.required],
      rate: ['', [Validators.required, Validators.min(0.0001)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    if (this.form.valid) console.log('Add:', this.form.value);
  }

  update() {
    if (this.form.valid) console.log('Update:', this.form.value);
  }

  delete() {
    console.log('Delete');
  }

  view() {
    console.log('View');
  }
}