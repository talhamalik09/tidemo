import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';

import { NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
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

      financingDetails: ['', Validators.required],

      instructionToFinanceParty: ['', Validators.required],

      instructionsToDebitParty: ['', Validators.required],

      financeToRole: ['', Validators.required],
      financeToParty: ['', Validators.required],

      debitPartyRole: ['', Validators.required],
      debitParty: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  roleOptions = [
    'Collecting Bank',
    'New Role',
    'Presenting Bank',
    'Remitting Bank',
    'Finance To Party',
    'Debit Party',
    'Funding Party',
    'Disbursement Party',
    'Invoice Seller',
    'Invoice Buyer',
    'SCF Buyer',
    'SCF Seller'
  ];

}