import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-shipmentguarantee-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './shipmentguarantee-details.html',
  styleUrl: './shipmentguarantee-details.scss'
})
export class ShipmentguaranteeDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      applicationDate: ['', Validators.required],
      issueDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      productType: ['', Validators.required],
      returnRequired: [false],
      multipleDocument: [false],
      adviceMethod: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  productTypeOptions = ['-'];

  adviceMethodOptions = [
    'Internal',
    'Mail',
    'Telex',
    'Telex via Swift',
    'Swift',
    'Fax',
    'Gateway',
    'E-mail'
  ];
}