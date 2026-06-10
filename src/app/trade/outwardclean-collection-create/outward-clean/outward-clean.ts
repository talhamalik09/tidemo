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
  selector: 'app-outward-clean',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './outward-clean.html',
  styleUrl: './outward-clean.scss'
})
export class OutwardClean {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  documentReleaseOptions: string[] = [
    'D/A',
    'D/P',
    'pour aval',
    'other'
  ];

  productTypeOptions: string[] = [
    '<--->'
  ];

  receivedFromOptions: string[] = [
    'collecting bank',
    'new role',
    'presenting bank',
    'remiting bank',
    'drawer',
    'payee',
    'third party'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      documentRelease: ['', Validators.required],
      productType: ['', Validators.required],

      receivedFromReference: ['', Validators.required],
      collectionAmount: ['', Validators.required],

      country: ['', Validators.required],
      secondCountry: ['', Validators.required],

      receivedOn: ['', Validators.required],

      receivedFromType: ['', Validators.required],

      receivedFrom: ['', Validators.required],
      receivedFromDetails: [''],

      sendTo: ['', Validators.required],
      sendToDetails: ['']

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}