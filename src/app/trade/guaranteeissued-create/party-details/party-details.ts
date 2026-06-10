import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
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
      applicant1: ['', Validators.required],
      applicant2: [''],

      beneficiary1: ['', Validators.required],
      beneficiary2: [''],

      principle1: [''],
      principle2: [''],

      obligor1: [''],
      obligor2: [''],

      advisingBank1: [''],
      advisingBank2: [''],

      adviseThroughBank1: [''],
      adviseThroughBank2: [''],

      country: [''],
      reference: [''],
      accountIdentifier: [''],

      adviseDirect: [false]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}