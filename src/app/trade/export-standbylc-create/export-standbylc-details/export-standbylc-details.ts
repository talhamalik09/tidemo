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
  selector: 'app-export-standbylc-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './export-standbylc-details.html',
  styleUrls: ['./export-standbylc-details.scss']
})
export class ExportStandbylcDetails {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      sendersReference: ['', Validators.required],
      adviseDate: ['', Validators.required],
      issueDate: ['', Validators.required],
      expiryDate: ['', Validators.required],

      governingLawCountry: ['', Validators.required],
      governingLawCountrySubdivision: ['', Validators.required],

      expiryPlace: ['', Validators.required],
      placeOfJurisdiction: ['', Validators.required],

      notPayableBefore: ['', Validators.required],

      adviseBy: ['', Validators.required],
      expiryType: ['', Validators.required],
      productType: ['', Validators.required],
      financialTrade: ['', Validators.required],
      applicableRules: ['', Validators.required],

      transferable: [false],
      irrevocable: [false],
      adviseDirect: [false],
      domesticExpiry: [false],
      operative: [false],
      partialDrawings: [false],
      multipleDrawings: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  adviseByOptions = [
    'Internal',
    'Mail',
    'Email',
    'Telex',
    'Telex Via Swift',
    'Swift',
    'Fax',
    'Gateway'
  ];

  expiryTypeOptions = [
    'Specific Date',
    'Conditional',
    'Unlimited'
  ];

  productTypeOptions = [
    'Custom Standby Letter Of Credit',
    'Maintenance Standby L/C'
  ];

  financialTradeOptions = [
    'Financial',
    'Trade'
  ];

  applicableRulesOptions = [
    'ISPR',
    'URDG',
    'OTHR',
    'UCPR',
    'NONE'
  ];

}