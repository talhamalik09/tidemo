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
  selector: 'app-claim-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './claim-details.html',
  styleUrl: './claim-details.scss'
})
export class ClaimDetails {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  presenterActionOptions: string[] = [
    'Documents Sent On Approval',
    'Other',
    'Pay And Claim Reimbursement',
    'Request Acceptance',
    'Request Authorization To Pay',
    'Sender Has Debited Our Account',
    'Request Payment'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      presentersReference: ['', Validators.required],

      presentationAmount: ['', Validators.required],

      additionalAmount: ['', Validators.required],

      presentationCurrency: ['', Validators.required],

      paymentDueDate: ['', Validators.required],

      chargeDate: ['', Validators.required],

      notesFromPresenter: ['', Validators.required],

      presentersDiscrepancies: ['', Validators.required],

      presentingParty: ['', Validators.required],

      presentingPartyDetails: ['', Validators.required],

      presentersAction: ['', Validators.required],

      presentationDate: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}