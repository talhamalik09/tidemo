import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-undertaking-terms-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './undertaking-terms-conditions.html',
  styleUrl: './undertaking-terms-conditions.scss'
})
export class UndertakingTermsConditions {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      language: ['', Validators.required],
      termsAndConditions: ['', Validators.required],
      useWordingType: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  wordingTypeOptions = [
    'Our Standard Wording',
    'Applicant Wording',
    'Beneficiary Wording',
    'Other'
  ];
}