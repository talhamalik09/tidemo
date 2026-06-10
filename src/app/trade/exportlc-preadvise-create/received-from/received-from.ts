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
  selector: 'app-received-from',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './received-from.html',
  styleUrl: './received-from.scss'
})
export class ReceivedFrom {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      receivedFrom: [
        '',
        Validators.required
      ],

      receivedFromDetails: [
        '',
        Validators.required
      ],

      instructionsReceived: [
        '',
        Validators.required
      ]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}