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
export class PartyDetails {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      issuingBank: [''],
      applicant: [''],
      nextAdvisingBank: [''],
      adviseThroughBank: [''],
      beneficiary: [''],

      reference: ['', Validators.required],
      country: ['', Validators.required],

      reference2: ['', Validators.required],
      country2: ['', Validators.required],

      country3: ['', Validators.required],
      reference3: ['', Validators.required],

      accountIdentifier: ['', Validators.required],
      accountIdentifier2: ['', Validators.required],

      adviseDirect: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}