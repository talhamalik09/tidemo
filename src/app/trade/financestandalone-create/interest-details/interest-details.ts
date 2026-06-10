import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-interest-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './interest-details.html',
  styleUrl: './interest-details.scss'
})
export class InterestDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      // dates
      effectiveDate: ['', Validators.required],
      startDate: ['', Validators.required],
      firstInterestDate: ['', Validators.required],

      // text fields
      period: ['', Validators.required],
      dueDate: ['', Validators.required],
      frequency: ['', Validators.required],
      dayInMonth: ['', Validators.required],
      projectedNextInterestDiscount: ['', Validators.required],
      noticeDays: ['', Validators.required],
      transitDays: ['', Validators.required],
      interestRate: ['', Validators.required],
      penaltyRateCode: ['', Validators.required],
      penaltyRate: ['', Validators.required],

      // dropdowns
      fromAfter: ['', Validators.required],
      interestType: ['', Validators.required],
      rateType: ['', Validators.required],
      interestDiscountPayer: ['', Validators.required],
      option: ['', Validators.required],

      // checkboxes
      transitInterestRequired: [false],
      interestExtraDay: [false],
      capitaliseCustomerMarkup: [false],
      capitalisePastDueInterest: [false],
      adviseInterest: [false]

    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  calculate() {
    console.log('Calculate clicked:', this.form.value);
  }

  openInterestRate() {
    console.log('Open interest rate popup');
  }

  // dropdown options
  fromAfterOptions = [
    'from(exclude start date)',
    'after',
    'from(include start date)'
  ];

  interestTypeOptions = [
    'interest in arrears',
    'interest in advance'
  ];

  rateTypeOptions = [
    'fixed',
    'special',
    'variable'
  ];

  payerOptions = [
    'credit party',
    'debit party'
  ];

  optionList = [
    'standard',
    'advance'
  ];
}