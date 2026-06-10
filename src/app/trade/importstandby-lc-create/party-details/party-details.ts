import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './party-details.html',
  styleUrls: ['./party-details.scss']
})
export class PartyDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      // MAIN ENTITIES (RESIZABLE + SINGLE INPUT)
      applicant: ['', Validators.required],
      applicantDetails: ['', Validators.required],

      beneficiary: ['', Validators.required],
      beneficiaryDetails: ['', Validators.required],

      advisingBank: ['', Validators.required],
      advisingBankDetails: ['', Validators.required],

      // COUNTRIES (SINGLE INPUT)
      applicantCountry: ['', Validators.required],
      beneficiaryCountry: ['', Validators.required],

      // INSTRUCTION
      instructionToAdvisingBank: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}