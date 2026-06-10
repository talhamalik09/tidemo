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

      reference: ['', Validators.required],

      fundingPartyOldReference: ['', Validators.required],

      role: ['', Validators.required],

      party: ['', Validators.required],

      partyReference: ['', Validators.required],

      liability: ['', Validators.required],

      showExtraParties: [false],
      showLiabilitySharedParties: [false],
      showAllParties: [false],

      exportCreditAgencyName: ['', Validators.required],
      exportCreditAgencyDetails: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  add() {
    console.log('Add clicked');
  }

  update() {
    console.log('Update clicked');
  }

  delete() {
    console.log('Delete clicked');
  }

  view() {
    console.log('View clicked');
  }

  roles() {
    console.log('Roles clicked');
  }
}