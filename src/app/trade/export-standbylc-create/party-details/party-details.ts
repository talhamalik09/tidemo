import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './party-details.html',
  styleUrls: ['./party-details.scss']
})
export class PartyDetails{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      applicant: ['', Validators.required],
      applicantDetails: ['', Validators.required],

      beneficiary: ['', Validators.required],
      beneficiaryDetails: ['', Validators.required],

      receivedFrom: ['', Validators.required],
      receivedFromDetails: ['', Validators.required],

      applicantCountry: ['', Validators.required],
      beneficiaryCountry: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}