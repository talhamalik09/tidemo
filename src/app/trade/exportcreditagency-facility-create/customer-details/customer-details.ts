import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.scss'
})
export class CustomerDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      reference: ['', Validators.required],

      customerIdentifier: ['', Validators.required],

      customerOtherReference1: ['', Validators.required],

      customerOtherReference2: ['', Validators.required],

      customerName: ['', Validators.required],

      customerAddress: ['', Validators.required],

      notesToCustomer: ['', Validators.required],

      specialInstructions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}