import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-exportlc-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './exportlc-details.html',
  styleUrl: './exportlc-details.scss'
})
export class ExportlcDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  confirmationOptions: string[] = [
    'Unconfirmed',
    'Confirmed',
    'May Add'
  ];

  applicableRulesOptions: string[] = [
    'UCP LATEST VERSION',
    'EUCP LATEST VERSION',
    'UCPURR LATEST VERSION',
    'EUCPURR LATEST VERSION',
    'OTHR'
  ];

  productTypeOptions: string[] = [
    '<--->'
  ];

  adviseByOptions: string[] = [
    'Telex',
    'Swift',
    'Telex via Swift',
    'Email',
    'Gateway',
    'Fax',
    'Mail',
    'Internal'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      sendersReference: [
        '',
        Validators.required
      ],

      expiryDate: [
        '',
        Validators.required
      ],

      expiryPlace: [
        '',
        Validators.required
      ],

      preadviceDate: [
        '',
        Validators.required
      ],

      confirmation: [
        '',
        Validators.required
      ],

      applicableRules: [
        '',
        Validators.required
      ],

      productType: [
        '',
        Validators.required
      ],

      adviseBy: [
        '',
        Validators.required
      ],

      transferable: [false],

      irrevocable: [false],

      revolving: [false],

      operative: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}