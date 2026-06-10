import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NgFor, NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './party-details.html',
  styleUrl: './party-details.scss'
})
export class PartyDetails {

  labels = LABELS;
  isOpen = true;

  form: FormGroup;

  draftDrawnOnOptions: string[] = [
    'Ourselves',
    'Own Branch',
    'Named Bank'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      // Beneficiary (2 inputs)
      beneficiaryName: ['', Validators.required],
      beneficiaryAddress: ['', Validators.required],

      // Obligor (2 inputs)
      obligorName: ['', Validators.required],
      obligorAddress: ['', Validators.required],

      // References
      beneficiaryReference: ['', Validators.required],
      obligorReference: ['', Validators.required],

      // Dropdown
      draftDrawnOn: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  submit() {
    console.log(this.form.value);
  }
}