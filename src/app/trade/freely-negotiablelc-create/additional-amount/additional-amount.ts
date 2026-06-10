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
  selector: 'app-additional-amount',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './additional-amount.html',
  styleUrl: './additional-amount.scss'
})
export class AdditionalAmount {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      additionalAmount: ['', Validators.required],

      valueDate: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}