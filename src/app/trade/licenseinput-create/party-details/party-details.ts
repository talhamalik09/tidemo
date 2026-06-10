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

      principalCode: ['', Validators.required],

      principalDescription: ['', Validators.required],

      furtherIdentification: ['', Validators.required],

      nonPrincipal: [{ value: '', disabled: true }]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}