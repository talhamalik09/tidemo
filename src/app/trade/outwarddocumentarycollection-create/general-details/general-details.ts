import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-general-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './general-details.html',
  styleUrl: './general-details.scss'
})
export class GeneralDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      receivedFromReference: ['', Validators.required],
      collectionAmount: ['', Validators.required],
      country1: ['', Validators.required],

      receivedFromLine1: ['', Validators.required],
      receivedFromLine2: ['', Validators.required],

      sendToLine1: ['', Validators.required],
      sendToLine2: ['', Validators.required],

      country2: ['', Validators.required],

      sendTo: ['', Validators.required],
      receivedFrom: ['', Validators.required],

      receivedOn: ['', Validators.required],
      productType: ['', Validators.required],
      documentRelease: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  partyOptions = [
    'Collecting Bank',
    'New Role',
    'Presenting Bank',
    'Remiting Bank',
    'Drawee',
    'Payee',
    'Third Party'
  ];

  productTypeOptions = [
    '<--->',
    'Export Advance Payment'
  ];

  documentReleaseOptions = [
    'D/A',
    'D/P',
    'Pour Aval',
    'Other'
  ];
}