import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      country: ['', Validators.required],
      beneficiaryAccount: ['', [Validators.required, Validators.minLength(5)]],

      instructionReceived: ['', [Validators.required, Validators.minLength(10)]],
      responseToSender: ['', [Validators.required, Validators.minLength(10)]],
      infoFromInstructingParty: ['', [Validators.required, Validators.minLength(10)]],
      acknowledgementNarrative: ['', [Validators.required, Validators.minLength(10)]],

      receivedFromShort: ['', Validators.required],
      receivedFromLong: ['', [Validators.required, Validators.minLength(10)]],

      applicantShort: ['', Validators.required],
      applicantLong: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}