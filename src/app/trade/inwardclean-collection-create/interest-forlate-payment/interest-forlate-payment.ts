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
  selector: 'app-interest-forlate-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './interest-forlate-payment.html',
  styleUrls: ['./interest-forlate-payment.scss']
})
export class InterestForlatePayment {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      rate: ['', Validators.required],

      startDate: ['', Validators.required],

      endPeriod: ['', Validators.required],

      orEndDates: ['', Validators.required],

      graceDays: ['', Validators.required],

      startInterest: ['', Validators.required],

      dayBasis: ['', Validators.required],

      startFrom: ['', Validators.required],

      waiveIfRefused: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    console.log(this.form.value);
  }

}