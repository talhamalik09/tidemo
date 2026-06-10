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
  selector: 'app-advise-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './advise-details.html',
  styleUrls: ['./advise-details.scss']
})
export class AdviseDetails{

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  confirmationInstructionOptions = [
    'Confirmed',
    'May Add',
    'Unconfirmed'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      nextAdvisingBank: ['', Validators.required],
      nextAdvisingBankDetails: ['', Validators.required],

      adviseThroughBank: ['', Validators.required],
      adviseThroughBankDetails: ['', Validators.required],

      instructionsToPayingAcceptingNegotiatingBank: ['', Validators.required],
      instructionToNextAdvisingBank: ['', Validators.required],

      accountNumber: ['', Validators.required],

      otherBanksConfirmationInstructions: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}