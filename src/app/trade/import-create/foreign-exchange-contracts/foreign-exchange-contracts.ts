import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-foreign-exchange-contracts',
  standalone: true,
  imports: [ReactiveFormsModule, ],
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
      purchaseCurrency: ['', [Validators.required, Validators.minLength(3)]],
      saleCurrency: ['', [Validators.required, Validators.minLength(3)]],
      rate: ['', [Validators.required, Validators.min(0)]]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log('ADD', this.form.value);
  }

  update() {
    console.log('UPDATE', this.form.value);
  }

  delete() {
    console.log('DELETE', this.form.value);
  }

  view() {
    console.log('VIEW', this.form.value);
  }
}