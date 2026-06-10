import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.scss']
})
export class Confirmation{

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  confirmationRequestedOptions = [
    'Confirmed',
    'May Add',
    'Unconfirmed'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      confirmationRequested: ['', Validators.required],
      silentConfirmation: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}