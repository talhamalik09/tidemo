import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
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

      customerName: ['', Validators.required],
      customerAddress: ['', Validators.required],   // resizable field (textarea)

      reference: ['', Validators.required],

      notesToCustomer: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}