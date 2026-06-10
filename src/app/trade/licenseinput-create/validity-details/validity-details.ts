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
  selector: 'app-validity-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './validity-details.html',
  styleUrl: './validity-details.scss'
})
export class ValidityDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      validFrom: ['', Validators.required],

      period: ['', Validators.required],

      validTo: ['', Validators.required],

      latestPaymentDate: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}