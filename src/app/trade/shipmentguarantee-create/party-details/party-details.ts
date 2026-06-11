import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './party-details.html',
  styleUrl: './party-details.scss'
})
export class PartyDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      importerShort: ['', Validators.required],
      importerFull: ['', Validators.required],

      shippingCompanyShort: ['', Validators.required],
      shippingCompanyFull: ['', Validators.required],

      originatingTransaction: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}