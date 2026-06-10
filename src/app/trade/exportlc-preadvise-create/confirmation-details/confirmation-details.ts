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
  selector: 'app-confirmation-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './confirmation-details.html',
  styleUrl: './confirmation-details.scss'
})
export class ConfirmationDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  confirmationOptions: string[] = [
    'Unconfirmed',
    'Confirmed',
    'May Add'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      confirmationRequested: [
        '',
        Validators.required
      ],

      silentConfirmation: [false],

      silentConfirmationByBank: [false],

      silentConfirmationByCustomer: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}