import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-renewal-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './undertaking-renewal-details.html',
  styleUrl: './undertaking-renewal-details.scss'
})
export class UndertakingRenewalDetails {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      renewalBasis: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  renewalBasisOptions = [
    'First Renewal / Rolling Renewal',
    'Regular Renewal'
  ];
}