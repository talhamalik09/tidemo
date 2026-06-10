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
  selector: 'app-further-parties',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './further-parties.html',
  styleUrl: './further-parties.scss'
})
export class FurtherParties {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      // TWO INPUT (TEXT + RESIZABLE)
      nextAdvisingBank: ['', Validators.required],
      nextAdvisingBankDetails: ['', Validators.required],

      adviseThroughBank: ['', Validators.required],
      adviseThroughBankDetails: ['', Validators.required],

      issuingBank: ['', Validators.required],
      issuingBankDetails: ['', Validators.required],

      // SINGLE INPUTS
      instructionsToNextAdvisingBank: ['', Validators.required],
      lcReference: ['', Validators.required],
      account: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}