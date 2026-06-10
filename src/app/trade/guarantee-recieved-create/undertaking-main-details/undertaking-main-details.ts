import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-main-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './undertaking-main-details.html',
  styleUrls: ['./undertaking-main-details.scss']
})
export class UndertakingMainDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  formOfUndertakingOptions = [
    'Demand Guarantee',
    'Standby Letter of Credit',
    'Dependent Undertaking'
  ];

  applicableRulesOptions = [
    'NONE URDG LATEST VERSION',
    'ISPR LATEST VERSION',
    'UCPR LATEST VERSION',
    'OTHER'
  ];

  expiryTypeOptions = [
    'Specific Date',
    'Unlimited',
    'Conditional'
  ];

  financialTradeOptions = [
    'Finance',
    'Trade'
  ];

  productTypeOptions = [
    'Advance Payment Guarantee',
    'Bid Bond Guarantee',
    'Credit Facility Guarantee',
    'Guarantee Received Custom',
    'Guarantee Received Tender',
    'Maintenance Guarantee',
    'Performance Bond Guarantee',
    'Related Guarantee',
    'Repayment Guarantee',
    'Retention Guarantee'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      issueDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      notPayableBefore: ['', Validators.required],

      governingLawCountry: ['', Validators.required],
      governingLawCountrySubdivision: ['', Validators.required],
      placeOfJurisdiction: ['', Validators.required],

      formOfUndertaking: ['', Validators.required],
      applicableRules: ['', Validators.required],
      expiryType: ['', Validators.required],
      financialTrade: ['', Validators.required],
      productType: ['', Validators.required],

      automaticRelease: [false],
      domesticExpiry: [false],
      partialDrawing: [false],
      multiplesDrawing: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}