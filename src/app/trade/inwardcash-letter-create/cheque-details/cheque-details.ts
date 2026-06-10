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
  selector: 'app-cheque-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cheque-details.html',
  styleUrls: ['./cheque-details.scss']
})
export class ChequeDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      currency: ['', Validators.required],
      numberOfCheques: ['', Validators.required],

      represent: [false],
      withRecourse: [false],
      autoPay: [false],
      tracePayments: [false],
      singleConsolidatedCheque: [false],

      sequenceNumber: ['', Validators.required],
      amount: ['', Validators.required],
      chequeCurrency: ['', Validators.required],
      number: ['', Validators.required],
      payer: ['', Validators.required],
      status: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log('Add', this.form.value);
  }

  update() {
    console.log('Update', this.form.value);
  }

  delete() {
    console.log('Delete', this.form.value);
  }

  view() {
    console.log('View', this.form.value);
  }

}